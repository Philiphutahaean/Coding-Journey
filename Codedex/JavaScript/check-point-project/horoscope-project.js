let birthMonth = "January";

function getRandomFortune (){
    const fortunes = [
        "Luck is on your side this month!",
        "Expect some surprising news.",
        "A chance encounter will lead to something great.",
        "This is a great time to focus on personal growth.",
        "Trust your instincts; they will guide you well.",
        "Financial success is on the horizon.",
        "An old friend may re-enter your life.",
        "Be open to new opportunities!"
    ];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}
switch (birthMonth) {
    case "January":
        console.log("♑ Capricorn - " + getRandomFortune());
        break;
    case "February":
        console.log("♒ Aquarius - " + getRandomFortune());
        break;
    case "March":
        console.log("♓ Pisces - " + getRandomFortune());
        break;
    case "April":
        console.log("♈ Aries - " + getRandomFortune());
        break;
    case "May":
        console.log("♉ Taurus - " + getRandomFortune());
        break;
    case "June":
        console.log("♊ Gemini - " + getRandomFortune());
        break;
    case "July":
        console.log("♋ Cancer - " + getRandomFortune());
        break;
    case "August":
        console.log("♌ Leo - " + getRandomFortune());
        break;
    case "September":
        console.log("♍ Virgo - " + getRandomFortune());
        break;
    case "October":
        console.log("♎ Libra - " + getRandomFortune());
        break;
    case "November":
        console.log("♏ Scorpio - " + getRandomFortune());
        break;
    case "December":
        console.log("♐ Sagittarius - " + getRandomFortune());
        break;
    default:
        console.log("Please enter a valid month.");
}