const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

const Header = ({ name }) => {
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => {
                return (<Part part={part} key={part.id} />);
            })}
        </div>
    );
}

const Total = ({ parts }) => {
    return (
        <div>
            <p>Number of exercises: {parts.reduce((total, part) => total + part.exercises, 0)}</p>
        </div>
    );
}

const Part = ({ part }) => {
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    );
}

export default Course;