import spinner from "./dora.gif";
export default function Home() {
    return (
    <>
        <h1 className="h1">Home Page | DoraDora!</h1>
        <h2>WOAH! Who turned on the lights?</h2>
        <p>Get ready for the adventure of a lifetime.</p>
        <img src={spinner} alt="Spinner"/>
        <h1 className="h1">Dora, Dora, the explorer!</h1>
        </>

    );
}