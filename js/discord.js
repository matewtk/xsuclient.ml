async function getRandomUsername(){var res=await fetch("https://weave.su/discord/users/random")
var js=await res.json()
return js.username}