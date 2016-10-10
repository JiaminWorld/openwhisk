/**
  * main() will be invoked when you Run This Action.
  * 
  * @param Whisk actions accept a single parameter,
  *        which must be a JSON object.
  *
  * @return The return value must also be JSON.
  *         It will be the output of this action.
  *
  */
function main(params) {
	
	var output = params.commits[0].message;
	return { "text": output,
	         "payload": output
	        };
	
}

/* Hint: To invoke this action, click Run This Action */
//
