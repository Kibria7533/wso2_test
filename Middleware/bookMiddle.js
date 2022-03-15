const { validationResult } = require('express-validator')
const fromCheck=(req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({success:false, message: errors.array()[0].msg });
    }

    next();
}

module.exports={
    fromCheck
}