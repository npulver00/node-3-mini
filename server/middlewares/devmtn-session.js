const sessions = {};
let nextSessionId = 1;

module.exports = (req,res, next) => {
        function createSession(){
            console.log(createSession);
            const newSession = {};
            sessions[nextSessionId] = newSession;
            req.session = newSession;
            res.setHeader('set-cookie','cookieId=' + nextSessionId + "; path=/;")
            nextSessionId++;
        }
      if(req.headers.cookie){
        const sessionId = req.headers.cookie.split('=')[1];
        if(sessions[sessionId]){
            req.session = sessions[sessionId];
        } else{
            createSession();
        }
      } else{
          createSession();
      }
      next();
    }
   