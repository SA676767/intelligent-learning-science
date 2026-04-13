const allData = {
    // BIOLOGY B1: Health & Lifestyle
    "B1.1 Nutrients": [{q: "Role of Carbs?", a: "Energy source"}, {q: "Role of Lipids?", a: "Energy store & insulation"}],
    "B1.2 Food Tests": [{q: "Starch test?", a: "Iodine (Blue/Black)"}, {q: "Protein test?", a: "Biuret (Purple)"}],
    "B1.3 Digestion": [{q: "Where is water absorbed?", a: "Large Intestine"}, {q: "Small Intestine role?", a: "Nutrient absorption"}],
    "B1.4 Enzymes": [{q: "What are enzymes?", a: "Biological catalysts"}, {q: "Where is Protease made?", a: "Stomach & Pancreas"}],
    
    // BIOLOGY B2: Ecosystems & Processes
    "B2.1 Photosynthesis": [{q: "Equation?", a: "CO2 + Water -> Glucose + Oxygen"}, {q: "Limiting factors?", a: "Light, CO2, Temperature"}],
    "B2.2 Respiration": [{q: "Aerobic Equation?", a: "Glucose + Oxygen -> CO2 + Water"}, {q: "Anaerobic (Yeast)?", a: "Glucose -> Ethanol + CO2"}],
    "B2.3 Inheritance": [{q: "Where is DNA found?", a: "In chromosomes in the nucleus"}, {q: "What is a gene?", a: "A section of DNA that codes for a characteristic"}],
    "B2.4 Evolution": [{q: "Who proposed Natural Selection?", a: "Charles Darwin"}, {q: "What causes extinction?", a: "Environment change, new predators, or disease"}],

    // CHEMISTRY C1: Periodic Table
    "C1.1 Metals": [{q: "Properties?", a: "Shiny, Conductive, Malleable"}, {q: "Metalloid?", a: "Has metal & non-metal properties"}],
    "C1.2 Group 1": [{q: "Name?", a: "Alkali Metals"}, {q: "Reactivity down group?", a: "Increases"}],
    "C1.3 Group 7": [{q: "Name?", a: "Halogens"}, {q: "Reactivity down group?", a: "Decreases"}],
    "C1.4 Group 0": [{q: "Name?", a: "Noble Gases"}, {q: "Why unreactive?", a: "Full outer shells"}],

    // CHEMISTRY C2: Earth & Atmosphere
    "C2.1 Earth Structure": [{q: "Layers?", a: "Crust, Mantle, Outer Core, Inner Core"}, {q: "Atmosphere mix?", a: "78% Nitrogen, 21% Oxygen"}],
    "C2.2 Greenhouse Effect": [{q: "Main gases?", a: "CO2 and Methane"}, {q: "Effect?", a: "Traps heat in atmosphere"}],
    "C2.3 Rock Cycle": [{q: "3 Rock types?", a: "Sedimentary, Igneous, Metamorphic"}, {q: "How is Igneous formed?", a: "Cooling of magma/lava"}],
    "C2.4 Extraction": [{q: "What is an Ore?", a: "Rock containing enough metal to be worth extracting"}, {q: "How is Iron extracted?", a: "Blast furnace with Carbon"}],

    // PHYSICS P1: Electricity & Magnetism
    "P1.1 Static": [{q: "Cause?", a: "Friction transferring electrons"}, {q: "Like charges?", a: "Repel"}],
    "P1.2 Resistance": [{q: "Formula?", a: "V / I"}, {q: "Unit?", a: "Ohms (Ω)"}],
    "P1.3 Electromagnets": [{q: "3 Magnetic metals?", a: "Iron, Nickel, Cobalt"}, {q: "Strength fix?", a: "More coils, more current"}],

    // PHYSICS P2: Energy & Fluids
    "P2.1 Energy stores": [{q: "Law?", a: "Energy cannot be created or destroyed"}, {q: "Stores?", a: "Kinetic, Thermal, Chemical, GPE"}],
    "P2.2 Heating": [{q: "Conduction?", a: "Heat transfer in solids"}, {q: "Radiation?", a: "Heat transfer via infrared waves"}],
    "P2.3 Work & Power": [{q: "Work Formula?", a: "Force x Distance"}, {q: "Power Unit?", a: "Watts (W)"}],
    "P2.4 Pressure": [{q: "Formula?", a: "Force / Area"}, {q: "Liquid pressure?", a: "Increases with depth"}]
};

let currentTopic = "Biology";
let index = 0;

function changeTopic(newTopic) {
    currentTopic = newTopic;
    index = 0;
    render();
}

function nextQuestion() {
    document.getElementById('card').classList.remove('flipped');
    setTimeout(() => {
        index = (index + 1) % allData[currentTopic].length;
        render();
    }, 200);
}

function render() {
    document.getElementById('q-text').innerText = allData[currentTopic][index].q;
    document.getElementById('a-text').innerText = allData[currentTopic][index].a;
}

render();