# Gratitude Jar README

<aside>
💡 Browser-based web app to collect good things throughout the day which you are grateful for. And getting a random gratitude memory.

</aside>

| NextJS REACT
Vercel | MongoDB
REST API
| Tailwind CSS
| NextAuth | Jest | Three Fiber
|
| --- | --- | --- | --- | --- | --- |

## Interface

![IMG_3997.jpeg](IMG_3997.jpeg)

## Data Structure

[gratitude_jar_database-structure.pdf](gratitude_jar_database-structure.pdf)

## Naming in this project

```jsx
// defining the Data

// one user Object
		const user = {
			userObjectId: ObjectId(''), // predefined _id by mongoDB
			username: "string",
			email: "string",
			password: "string",
			gratitudeList: [
					{gratitudeStatement},
					{gratitudeStatement}
					],
		}

// one gratitudeStatement  Object
		const gratitudeStatement = {
			gratitudeStatementObjectId: ObjectId('') // predefined _id by mongoDB
			dateCreation: "string",
			statementText: "string",
		}


```

| Variables                  | explanation / where its used                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| user                       | a user object with its whole info (only used in database)                                                    |
| gratitudeStatement         | a object for the whole entry that a user does if they submit a gratitude statement                           |
| dateCreation               | date when gratitudeStatement was created by user (no editing possible)                                       |
| statementText              | written words of user                                                                                        |
| userObjectId               | predefined \_id by mongoDB                                                                                   |
| gratitudeStatementObjectId | predefined \_id by mongoDB                                                                                   |
| usersList                  | list of all users === Array of userObjects and those userOjects have an array with gratitudeStatementObjects |

## REACT Components

```jsx
// -------- top top top Parent --------
export default function HomePage() {
		// no header!
		<AppBackground /> // link to assets: [see image](https://www.notion.so/Interface-Userflow-ad79dbdd5370451e98673f0c55caa0c5?pvs=21)
		<BlurryLayer /> // only if GratitudeViewBox is active
		<CancelBackButton /> // only if GratitudeViewBox is active
		<GlassJarSection />
		<GratitudeFormSection />
		}
// ------------------------------------

// ------------- 2nd Level ------------
export default function GlassJarSection() {
		<GlassJar />
		<CrumpledPaper />
}
// --- AND :
export default function GratitudeFormSection() {
		<OpenGratitudeFormButton />
		<GratitudeForm />
		<DisplayFormButton />
		<GratitudeViewBox />
		<RandomGratitudeButton />
}
// ------------------------------------

export default function AppBackground() {}
export default function BlurryLayer() {}
export default function CancelBackButton() {}
	// Button to cancel writing an entry

export default function GlassJar() {}
	// Component for the animated glassJar with Three JS
export default function CrumpledPaper() {}
	// adding a CrumpledPaper everytime User submits a gratitudeStatement
	// --> additional low prio feature

export default function DisplayFormButton() {}
	// button to hide-> display the GratitudeForm
export default function GratitudeForm() {}
	// adding gratitudeStatement
export default function GratitudeViewBox() {}
	// div box with gratitudeStatement + dateCreated
export default function RandomGratitudeButton() {}
	// Button to get a random gratitudeStatement
```

## Page Layout and Components

1. HomePage index.js
   1. <AppBackground />
   2. <BlurryLayer />
   3. <CancelBackButton />
   4. <GlassJarSection />
      1. <GlassJar />
      2. <CrumpledPaper />
   5. <GratitudeFormSection />
      1. <GratitudeForm />
      2. <DisplayFormButton />
      3. <GratitudeViewBox />
      4. <RandomGratitudeButton />

## Props UP and DOWN

[https://miro.com/app/board/uXjVNsCw6Vo=/?share_link_id=781978993892](https://miro.com/app/board/uXjVNsCw6Vo=/?share_link_id=781978993892)
