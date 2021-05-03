I'll be using the [UpperCase](https://github.com/firebase/functions-samples/tree/master/quickstarts/uppercase) example from the functions samples repository.

First you need to make sure your user ID has the functions admin role in the IAM settings in the [Google Console](https://cloud.google.com/cloud-console):

Then you need to specify the instance you'll be accessing, in this case I'm declaring the database with the initialization of the app in order to write to it, in order to use it as a trigger, you need to declare the instance with functions.database.instance('instance-name-here').

Put your project name between the brackets:

https://us-central1-[your-project-here].cloudfunctions.net/addMessage?text=testingeurope

https://us-central1-[your-project-here].cloudfunctions.net/addMessageUS?text=testingus

https://us-central1-[your-project-here].cloudfunctions.net/addMessageAsia?text=testingasia

Notice how I'm using the us-central1 region for all the functions.

Now, in order to create your functions on a [specific location](https://firebase.google.com/docs/functions/locations), in this case europe-west1 (Belgium), you just have to add the .region('europe-west1') to it, these are the new functions:

https://europe-west1-[your-project-here].cloudfunctions.net/addMessageWest1?text=testingeurope

https://europe-west1-[your-project-here].cloudfunctions.net/addMessageUSWest1?text=testingus

https://europe-west1-[your-project-here].cloudfunctions.net/addMessageAsiaWest1?text=testingasia

