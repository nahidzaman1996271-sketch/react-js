const users = [
  {
    fullName: "Nahid Zaman",
    age: 32,
    phones: [
      { home: "01976736537" },
      { office: "01303231239" },
    ],
  },
  {
    fullName: "Nahid Zaman",
    age: 32,
    phones: [
      { home: "01976736537" },
      { office: "01303231239" },
    ],
  },
  // add more users here
];

export default function App() {
  return (
    <div>
      <h1>Nested Lists</h1>
      {
        users.map((user, index) => {
          return (
            <div key={index}>
              <h2>{user.fullName}</h2>
              <p>Age: {user.age}</p>

              <ul>
                {user.phones.map((phone, phoneIndex) => {
                  // each phone object has one key: "home" or "office"
                  const [type, number] = Object.entries(phone)[0];
                  return (
                    <li key={phoneIndex}>
                      {type}: {number}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })
      }
    </div>
  );
}