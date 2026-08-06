import express from "express";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", company: "Star Builders Puducherry" });
});

app.post("/api/contact", (req, res) => {
  const { name, phone, email, projectType, budget, location, requirements } = req.body;
  const referenceId = "SB-" + Math.floor(100000 + Math.random() * 900000);
  res.json({
    success: true,
    referenceId,
    message: `Thank you ${name || 'valued client'}, your consultation request has been received. Our senior architect from Star Builders Puducherry will contact you shortly!`
  });
});

app.post("/api/gemini/estimate", async (req, res) => {
  try {
    const { builtUpArea, projectType, qualityTier, bedrooms, floors, location, specialRequests } = req.body;

    if (!ai) {
      const sqft = Number(builtUpArea) || 1500;
      const rateMap: Record<string, number> = {
        'Standard Luxury': 2200,
        'Premium Executive': 2800,
        'Royal Ultra Luxury': 3600
      };
      const rate = rateMap[qualityTier] || 2500;
      const estimatedCostMin = Math.round(sqft * rate * 0.95);
      const estimatedCostMax = Math.round(sqft * rate * 1.08);
      const estimatedDurationMonths = Math.max(6, Math.round(sqft / 250));

      return res.json({
        estimatedCostRange: `₹${(estimatedCostMin / 100000).toFixed(2)} Lakhs - ₹${(estimatedCostMax / 100000).toFixed(2)} Lakhs`,
        estimatedCostMin,
        estimatedCostMax,
        ratePerSqFt: rate,
        estimatedDurationMonths,
        structuralBreakdown: [
          { category: "Civil & Foundation", percentage: "32%", description: "Tata Tiscon TMT, ACC/UltraTech cement, M25 concrete, pile/isolated footing" },
          { category: "Brickwork & Plastering", percentage: "18%", description: "First class red wire-cut bricks / AAC blocks, river sand plastering" },
          { category: "Flooring & Tiles", percentage: "15%", description: "Kajaria/Somany 800x1600mm vitrified tiles / Italian Marble options" },
          { category: "Woodwork & Openings", percentage: "12%", description: "Teakwood main door, UPVC/Alumil window frames with toughened glass" },
          { category: "Electrical & Plumbing", percentage: "11%", description: "Finolex/Havells concealed wiring, Jaquar/Kohler sanitary fixtures" },
          { category: "Painting & Finishing", percentage: "12%", description: "Asian Paints Royal Emulsion, weatherproof exterior texture coating" }
        ],
        aiRecommendations: [
          "Given Puducherry's coastal weather, we recommend anti-corrosive epoxy coated TMT bars and waterproofing membrane treatment for terraces.",
          "Incorporate high ceiling vents and cross-ventilation windows to maximize natural lighting and sea breeze.",
          "Solar panel pre-wiring and rainwater harvesting system integrated into structural design for sustainability."
        ]
      });
    }

    const prompt = `You are the Lead Cost Estimator & Senior Architect at Star Builders, a top luxury construction firm in Puducherry.
Calculate a detailed, realistic project estimation and architectural breakdown for a client in Puducherry with the following requirements:
- Built-up Area: ${builtUpArea} sq ft
- Project Type: ${projectType}
- Quality Tier: ${qualityTier}
- Bedrooms / Configuration: ${bedrooms}
- Floors: ${floors}
- Preferred Location: ${location || 'Puducherry'}
- Additional Requirements: ${specialRequests || 'Standard modern luxury home'}

Format your response as strict JSON with the following key fields:
1. estimatedCostRange: (String, e.g. "₹45.00 Lakhs - ₹52.00 Lakhs")
2. estimatedCostMin: (Number in INR rupees)
3. estimatedCostMax: (Number in INR rupees)
4. ratePerSqFt: (Number in INR per sqft)
5. estimatedDurationMonths: (Number)
6. structuralBreakdown: Array of objects with { category, percentage, description }
7. aiRecommendations: Array of strings (3-4 professional architectural and materials advice tailored to Puducherry coastal climate and style).`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.text || "{}";
    const parsedData = JSON.parse(text);
    res.json(parsedData);
  } catch (err: any) {
    console.error("Error in Gemini API estimate:", err);
    res.status(500).json({ error: "Failed to generate estimation." });
  }
});

export default app;
