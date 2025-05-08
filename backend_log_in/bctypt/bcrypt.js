const bcrypt= require("bcryptjs");
async function hash(password){
    return await bcrypt.hash(password,10);
}

async function verify(storedHash,passwordToken){
    return await bcrypt.compare(passwordToken,storedHash);
}
module.exports={hash,verify };