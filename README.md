# Gratitude Jar README

<aside>
💡 Browser-based web app to collect good things throughout the day which you are grateful for. And getting a random gratitude memory.

</aside>

| NextJS REACT
Vercel | MongoDB
REST API
| Tailwind CSS
| NextAuth | React Three Fiber | React Spring |


## Data Structure

↪️ open here: [gratitude_jar_database-structure.pdf](gratitude_jar_database-structure.pdf)

## Naming in this project

#### Schema Database
```jsx
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  gratitudeStatements: {
    type: [Schema.Types.ObjectId],
    ref: "GratitudeStatements",
  },
});

const gratitudeStatementsSchema = new Schema({
  dateCreation: { type: String, require: true },
  statementText: { type: String, require: true },
});
```

## REACT Components

```jsx

// -------- Parent Homepage --------
HomePage() {
<Login /> // see nextauth for more
<GlassJar /> // Canvas with 3D objects (jar and paper)
<ShatterButton /> // leads to /BreakingPage
<Arrows /> // shows user to interact with GlassJar
<GratitudeForm /> // adding gratitudeStatement
<RandomGratitudeButton /> // Button to get a random gratitudeStatement
}
```

## Props UP and DOWN

[https://miro.com/app/board/uXjVNsCw6Vo=/?share_link_id=781978993892](https://miro.com/app/board/uXjVNsCw6Vo=/?share_link_id=781978993892)
