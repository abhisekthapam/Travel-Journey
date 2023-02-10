const myData = [
    {
        id: 1,
        img: "maldives.jpg",
        location: "Maldives",
        map: "https://earth.google.com/web/@3.19305126,74.14779734,240.37039496a,1503567.10317492d,35y,0h,0t,0r/data=CksaSRJDCiUweDI0YjU5OWJmYWFmYjdiYmQ6MHg0MTQ1MDllMTgxOTU2Mjg5GST6a2i5ov8_IZaWkXpPYlJAKghNYWxkaXZlcxgCIAE",
        name: "Maldives",
        date: "12 Nov, 2026 - 24 Nov, 2026",
        detail: "The Maldives is a tropical island nation in the Indian Ocean known for its beautiful beaches, clear waters, and marine life. It is made up of 26 atolls and its capital is Malé. It has a unique culture influenced by its history and Islamic traditions, and faces environmental challenges such as rising sea levels."
    },
    {
        id: 2,
        img: "japan.webp",
        location: "Japan",
        map: "https://earth.google.com/web/@34.78384835,134.375054,45.94176652a,4887809.5540726d,35y,0h,0t,0r/data=ClgaVhJQCiUweDM0Njc0ZTBmZDc3ZjE5MmY6MHhmNTQyNzVkNDdjNjY1MjQ0Gcu3Pqw3GkJAIfSLEvQXSGFAKhXguI3guLXguYjguJvguLjguYjguJkYAiAB",
        name: "Japan",
        date: "2 Dec, 2026 - 12 Dec, 2026",
        detail: "Japan is an island country located in East Asia with a rich cultural heritage, advanced technology, and beautiful landscapes. It has a population of 126 million, with Tokyo as its capital and largest city. Japan is famous for its traditional culture, technological advancements, and scenic spots, and is considered a major economic power with a high standard of living."
    },
    {
        id: 3,
        img: "southkorea.jpg",
        location: "South Korea",
        map: "https://earth.google.com/web/search/south+korea/@35.81897834,127.87375006,358.38164192a,967146.98822874d,35y,0h,0t,0r/data=CnYaTBJGCiUweDM1NjQ1NWViY2IxMWJhOWI6MHg5MTI0OWIwMGJhODhkYjRiGYfboWEx9EFAIU4lA0AV8V9AKgtzb3V0aCBrb3JlYRgCIAEiJgokCfflfHw2VkNAEVCjU0P-jANAGbLs0rK_3lVAIV1n6_ZeV2bA",
        name: "South Korea",
        date: "13 Jan, 2027 - 20 Jan, 2027",
        detail: "South Korea is a technologically advanced country in East Asia known for its rich cultural heritage and scenic beauty, with Seoul as its capital and a strong economy. It is considered one of the 'Four Asian Tigers.'"
    },

    {
        id: 4,
        img: "china.jpg",
        location: "China",
        map: "https://earth.google.com/web/search/china/@35.69206357,105.47598171,2164.88680203a,7720354.48436429d,35y,0h,0t,0r/data=CnAaRhJACiUweDMxNTA4ZTY0ZTVjNjQyYzE6MHg5NTFkYWE3YzM0OWYzNjZmGbwi-N9K7kFAISMva2KBDFpAKgVjaGluYRgCIAEiJgokCQxOSZjep0NAEcZzeOzE8yFAGUtGlsPYH2ZAIaixO3Ma8mTA",
        name: "China",
        date: "21 Feb, 2027 - 30 Feb, 2027",
        detail: "China is a large, populous country in East Asia with a rich history and culture. It is the world's second largest economy and a major global player, ruled by the Communist Party of China with a one-party system of government. It has a diverse landscape and is known for its ancient dynasties and contributions to various fields."
    },

    {
        id: 5,
        img: "america.jpg",
        location: "America",
        map: "https://earth.google.com/web/search/america/@37.59960342,-95.6999128,310.87426474a,7552036.4273121d,35y,0h,0t,0r/data=CnIaSBJCCiUweDU0ZWFiNTg0ZTQzMjM2MGI6MHgxYzNiYjk5MjQzZGViNzQyGUFl_PuMi0JAITenkgGg7VfAKgdhbWVyaWNhGAIgASImCiQJ_7ikhuWCQ0ARVY3Bng3_CEAZ-SLDSzLAZUAh5wfLwGUiQUA",
        name: "America",
        date: "1 Mar, 2027 - 7 Mar, 2027",
        detail: "The United States (U.S.) is a highly influential North American nation known for its democratic government, diverse society, and strong economy, with a long-standing reputation for innovations and advancements in fields including science, technology, education, and military power."
    },
    
    {
        id: 6,
        img: "canada.jfif",
        location: "Canada",
        map: "https://earth.google.com/web/search/canada/@54.91062062,-95.98016619,204.38676638a,10640367.43173167d,35y,0h,0t,0r/data=CnEaRxJBCiUweDRiMGQwM2QzMzdjYzZhZDk6MHg5OTY4YjcyYWEyNDM4ZmE1GVJBRdWvEExAIeAM_n4xllrAKgZjYW5hZGEYAiABIiYKJAml4Md7YtBDQBG1pM0kCncRQBkmcsKF6GM4wCF9p3BLEt5kwA",
        name: "Canada",
        date: "8 Apr, 2027 - 18 Apr, 2027",
        detail: "Canada is a large, wealthy country in North America known for its natural beauty, multicultural population, high standard of living, and strong economy. It is a federal parliamentary democracy and constitutional monarchy, with a strong focus on education, health care, and environmental initiatives."
    },    
    {
        id: 7,
        img: "austrilia.jpg",
        location: "Austrilia",
        map: "https://earth.google.com/web/search/austrilia/@-26.14523079,133.4678581,446.29036085a,8558540.64747889d,35y,0h,0t,0r/data=CnQaShJECiUweDJiMmJmZDA3Njc4N2M1ZGY6MHg1MzgyNjdhMTk1NWIxMzUyGXoWhPI-RjnAIXk-A-rNuGBAKglhdXN0cmlsaWEYAiABIiYKJAkjTRcwd4xFQBG3kayF5aowQBndRwdGohNmQCFJKKdD4TJiwA",
        name: "Austrilia",
        date: "19 May, 2027 - 25 May, 2027",
        detail: "Australia is a country and continent in the southern hemisphere known for its unique flora and fauna, diverse landscapes, strong economy, and multicultural society. It is a federal parliamentary democracy and constitutional monarchy, with a high standard of living, excellent education system, and active involvement in international affairs."
    },
    {
        id: 8,
        img: "german.webp",
        location: "Germany",
        map: "https://earth.google.com/web/search/Germany/@51.17557536,10.45491036,231.347533a,1494604.66540403d,35y,0h,0t,0r/data=CnIaSBJCCiUweDQ3OWE3MjFlYzJiMWJlNmI6MHg3NWU4NWQ2YjhlOTFlNTViGeoe2Vw1lUlAIV-Wdmou5yRAKgdHZXJtYW55GAIgASImCiQJDJZSYsc7O0ARp70Fuk7II8AZ-vqwQ5MgV0AhrumJiOGjZcA",
        name: "Germany",
        date: "25 Jun, 2027 - 1 Jun, 2027",
        detail: "Germany is a central European country with a rich cultural heritage, strong economy, and diverse population. It is a federal parliamentary republic with a high standard of living, excellent education system, and active involvement in European and international affairs."
    },
    {
        id: 9,
        img: "france.jpg",
        location: "France",
        map: "https://earth.google.com/web/search/france/@46.37295014,2.31222992,458.93059787a,1646925.470145d,35y,0h,0t,0r/data=CnAaRhJACiQweGQ1NGEwMjkzMzc4NTczMToweDZiZmQzZjk2Yzc0N2Q5ZjcZ1qnyPSMdR0Ah8GskCcK1AUAqBmZyYW5jZRgCIAEiJgokCTy72RB7QEtAEdp5GR26xkZAGX9vnMEEXDxAIUTlC7MJzh3A",
        name: "France",
        date: "2 Jul, 2027 - 15 Jul, 2027",
        detail: "France is a Western European country with a rich cultural heritage, strong economy, and diverse population. It is a unitary semi-presidential republic with a high standard of living, excellent education system, and active involvement in European and international affairs."
    },
    {
        id: 10,
        img: "thailand.jpg",
        location: "Thailand",
        map: "https://earth.google.com/web/search/thailand/@13.03972515,101.488202,48.22648604a,2322007.72490355d,35y,0h,0t,0r/data=CnMaSRJDCiUweDMwNGQ4ZGY3NDc0MjRkYjE6MHg5ZWQ3MmM4ODA3NTdlODAyGWvylNV0vS9AIRq8r8qFP1lAKgh0aGFpbGFuZBgCIAEiJgokCXOXqCvIAklAEXrq2HSvAURAGUJFGdRmFzRAIby4SNPc-S_A",
        name: "Thailand",
        date: "16 Jul, 2027 - 27 Jul, 2027",
        detail: "Thailand is a Southeast Asian country known for its rich cultural heritage, rapidly developing economy, natural beauty, delicious cuisine, friendly people, and active participation in regional and international affairs. It is a constitutional monarchy with a democratic system of government."
    },
]
export default myData
