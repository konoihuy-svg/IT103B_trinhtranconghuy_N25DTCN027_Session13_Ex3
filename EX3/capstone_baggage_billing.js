let ticket = {
    pnr: "VN123",
    name: "Nguyen Van A",
    ticketClass: "ECONOMY",
    memberTier: "TITAN" 
};

let baggageList = [
    { id: "BAG1", weight: 15, type: "NORMAL" },
    { id: "BAG2", weight: 12, type: "BULKY" },
    { id: "BAG3", weight: 8, type: "PET" }
];

function calculateBaggageSurcharge(ticket, baggageList) {
    let freeLimit = 20;
    if (ticket.ticketClass === "BUSINESS") {
        freeLimit = 30;
    }
    
    if (ticket.memberTier === "TITAN" || ticket.memberTier === "GOLD" || ticket.memberTier === "PLATINUM") {
        freeLimit += 10;
    }

    let totalWeight = 0;
    let bulkyFee = 0;
    let petFee = 0;

    for (let i = 0; i < baggageList.length; i++) {
        let bag = baggageList[i];
        totalWeight += bag.weight;
        
        if (bag.type === "BULKY") {
            bulkyFee += 200000;
        } else if (bag.type === "PET") {
            petFee += 500000;
        }
    }

    let excessWeight = totalWeight - freeLimit;
    let excessFee = 0;

    if (excessWeight > 0) {
        if (excessWeight <= 5) {
            excessFee = excessWeight * 60000;
        } else {
            excessFee = (5 * 60000) + ((excessWeight - 5) * 80000);
        }
    } else {
        excessWeight = 0; 
    }

    let totalFee = excessFee + bulkyFee + petFee;

    console.log("=== BIEN LAI THU PHI HANH LY ===");
    console.log("Hanh khach: " + ticket.name);
    console.log("Han muc mien phi: " + freeLimit + " kg");
    console.log("Tong trong luong: " + totalWeight + " kg");
    console.log("Trong luong vuot muc: " + excessWeight + " kg");
    console.log("--------------------------------");
    console.log("Phi qua can: " + excessFee + " VND");
    console.log("Phi cong kenh: " + bulkyFee + " VND");
    console.log("Phi thu cung: " + petFee + " VND");
    console.log("================================");
    console.log("TONG THANH TOAN: " + totalFee + " VND");
    console.log("================================");
}

calculateBaggageSurcharge(ticket, baggageList);