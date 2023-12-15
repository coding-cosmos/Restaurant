function Home() {
    const homeDiv = document.createElement('div');
    const heading = document.createElement('h1');
    heading.innerText = '<Code Coffee Cafe/>';

    homeDiv.appendChild(heading);

    return homeDiv;
}

export default Home;