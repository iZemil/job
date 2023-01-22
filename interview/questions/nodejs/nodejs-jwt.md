# What is JWT?

JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

There are some advantages of using JWT for authorization:

-   Purely stateless. No additional server or infra required to store session information.
-   It can be easily shared among services.

**Syntax:**

```js
jwt.sign(payload, secretOrPrivateKey, [options, callback])
```

-   **Header** - Consists of two parts: the type of token (i.e., JWT) and the signing algorithm (i.e., HS512)
-   **Payload** - Contains the claims that provide information about a user who has been authenticated along with other information such as token expiration time.
-   **Signature** - Final part of a token that wraps in the encoded header and payload, along with the algorithm and a secret

**Installation:**

```
npm install jsonwebtoken bcryptjs --save
```

**Example**:

```js AuthController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../user/User');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/sign-up', function(req, res) {
	const { name, email, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 8);
  
	User.create({
		name,
	    email,
	    password: hashedPassword
	}, (err, user) => {
		if (err) {
		    return res.status(500).send("There was a problem registering the user.")
		}
	
		const token = jwt.sign({ id: user._id }, config.secret, {
		    expiresIn: 86400 // expires in 24 hours
		});
    
	    res.status(200).send({ auth: true, token });
	});
});
```

**config.js:**
```js
module.exports = {
  'secret': 'supersecret'
};
```

The `jwt.sign()` method takes a payload and the secret key defined in `config.js` as parameters. It creates a unique string of characters representing the payload. In our case, the payload is an object containing only the id of the user.