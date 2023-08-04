import 'bootstrap/scss/bootstrap.scss';

const HomePage = () => {
  return (
  <>
    <h1 className="mb-4">
      Welcome to the &quot;Inventory App&quot; demo application!
    </h1>

    <main>
      <div>
        <h2>Description:</h2>

        <p>
          The Inventory App is a web application designed to manage and display orders and products in an organized manner.
          <br />
          This app provides users with the ability to view, filter, and manipulate orders and products data.
        </p>
        <p>
          
        </p>
      </div>

      <div>
        <h2>Features:</h2>

        <ul>
          <li>View a list of orders along with their associated products.</li>
          <li>Filter products by type.</li>
          <li>Remove products from orders.</li>
          <li>Display detailed information about selected orders.</li>
        </ul>
      </div>

      <div>
        <h2>Technologies Used</h2>

        <ul>
          <li>
            <p>
              <b>React:</b>The application is built using the React library for creating dynamic user interfaces.
            </p>
          </li>

          <li>
            <p>
              <b>Redux:</b> Redux is used for state management, ensuring efficient handling of application data.
            </p>
          </li>

          <li>
            <p>
              <b>Redux Tool Kit:</b> The Redux Toolkit package is utilized to simplify the creation of Redux-related code.
            </p>
          </li>

          <li>
            <p>
              <b>SCSS:</b> The SCSS (Sass) preprocessor is used for styling components, enabling more structured and maintainable CSS code.
            </p>
          </li>

          <li>
            <p>
              <b>Next.js:</b> The Next.js framework is used for server-side rendering and optimizing the application&apos;s performance.
            </p>
          </li>

          <li>
            <p>
              <b>Bootstrap:</b> Bootstrap is used for responsive and visually appealing UI components, speeding up the development process.
            </p>
          </li>

          <li>
            <p>
              <b>TypeScript: </b>TypeScript is used to add static typing to JavaScript, enhancing code quality and development experience.
            </p>
          </li>
        </ul>
      </div>
    </main>
  </>
  )
}

export default HomePage;