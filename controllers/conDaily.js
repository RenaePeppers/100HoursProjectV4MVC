module.exports = {   
    getDaily : async (request, response) => {
        try {
          response.render('daily.ejs',{title:"Daily Data Entry"})   //if html, would use sendFile instead of render? title if for layout.ejs
        } catch (error) {
            response.status(500).send({message:error.message})
        }
    }
}