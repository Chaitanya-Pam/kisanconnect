// =====================================
// KisanConnect AI Module (Prototype)
// =====================================

/*
 This module simulates AI responses.
 Later you can replace these functions
 with Gemini/OpenAI API calls.
*/

function getAIRecommendation(diseaseName) {

    const recommendations = {

        "Early Blight":
            "Apply Mancozeb at the recommended dosage. Remove infected leaves and avoid excessive moisture.",

        "Leaf Blast":
            "Use Tricyclazole during the early infection stage. Maintain proper field drainage.",

        "Leaf Curl":
            "Control whiteflies using Imidacloprid and remove severely infected plants."

    };

    return recommendations[diseaseName] ||
        "No AI recommendation available.";
}

function getRiskLevel(diseaseName) {

    const risk = {

        "Early Blight": "Medium",

        "Leaf Blast": "High",

        "Leaf Curl": "Medium"

    };

    return risk[diseaseName] || "Unknown";
}

function getRecoveryEstimate(diseaseName) {

    const recovery = {

        "Early Blight": "7–14 days",

        "Leaf Blast": "10–15 days",

        "Leaf Curl": "14–21 days"

    };

    return recovery[diseaseName] || "Not Available";
}