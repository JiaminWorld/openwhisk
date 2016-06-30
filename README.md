# openwhisk
This is a guide of create a sequence of actions and automate it on openwhisk.

# Prerequirtement
1. Be sure you have a github account
2. Be sure you have a IBM bluemix account which is for openwhisk.
3. Be sure you have a slack account and team ready.

# Create an action firstly.
1. Go to openwhisk dashboard. https://new-console.ng.bluemix.net/openwhisk
2. Click editer -> create an action.
3. Copy the code of myaction.js under action folder.

# Create a package
1. Click "link to a sequence", then choose slack.
2. Please add your own package binding. You can click the "plus" on the left.
3. Fill the form and create a webhook api by click "get a webhook url".

# Now we can try to run the sequence!
1.Click on run this sequence
2.Name it and input JSON
  {
    "commits": [
        {
            "message": "This is a test to send message to slack"
        }
    ]
}
3.Click on "Run"

Now you should be able to receive a message on slack.
Next, let's Automate the sequence.

# Create trigger
1.Choose the sequence and click "automate this sequence"
2.Choose github.
3.Fill the form
  Username : your username of github
  Repository : your repo
  Token : click on "Get an access token" to generate to token if you don't have one
  Event : push
4.Save it

# Create rule 
1.Choose the trigger you just created
2.Next -> it looks good -> save !

Now let's see the magic.

Go to your github and make a commit. Then.....you should receive a message on slack !


