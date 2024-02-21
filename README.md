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


## Data Structure

[gratitude_jar_database-structure.pdf](gratitude_jar_database-structure.pdf)

## Naming in this project

```jsx
// defining the Data

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    gratitudeStatements: { type: [Schema.Types.ObjectId], ref: "GratitudeStatements" }
});
	
const gratitudeStatementsSchema = new Schema({
    // gratitudeStatementObjectId: ObjectId('') predefined _id by mongoDB
    dateCreation: { type: String, require: true },
    statementText: { type: String, require: true },
});

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
		<GlassJar />
		<Login />
		}
// ------------------------------------

// ---- user is logging in ------ 

// -------- Parent ---------------------
export default function Hompage() {
		// no header!
		<Login /> // shows logged in user
			<BlurryLayer /> // only if GratitudeViewBox is active
			<CancelBackButton /> // only if GratitudeViewBox is active
		
		<GlassJar />

				<DisplayFormButton />
				// button to hide&display the GratitudeForm
        <GratitudeForm />
				// adding gratitudeStatement
        <GratitudeStatement />
        <RandomGratitudeButton />
				// Button to get a random gratitudeStatement
		}
// ------------------------------------

// ------------- 3rd Level ------------
export default function GlassJar() {	
		<CrumpledPaper />
}
// ------------------------------------

export default function Login() {}
export default function AppBackground() {}
export default function BlurryLayer() {}
export default function CancelBackButton() {}
	// Button to cancel writing an entry

export default function GlassJar() {}
	// Component for the animated glassJar with Three JS
export default function CrumpledPaper() {}
	// adding a CrumpledPaper everytime User submits a gratitudeStatement
	// --> additional low prio feature

export default function GratitudeStatement() {}
export default function GratitudeForm() {}
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
