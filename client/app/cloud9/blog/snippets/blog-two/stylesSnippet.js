export const stylesSnippet = `
h1 {
  font-weight: 400;
  font-size: 1.6rem;
  color: white;
}

p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: white;
  max-width: 240px;
}

span {
  text-align: center;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 4rem;
}

.main {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background: black;
}

.slide {
  height: 500px;
  width: 90vw;
  display: grid;
  place-items: center;
  color: black;
  border-radius: 3rem;
}

.slider-container {
  height: 500px;
  width: 90vw;
  overflow-y: hidden;
}

.slider-inner {
  transform: translateY(0);
}

.slide-number-p {
  font-weight: 500;
  font-size: 2rem;
  text-transform: capitalize;
}

.slider- {
  height: 80vh;
  overflow-y: hidden;
}

.slide-one {
  background: rgb(180, 162, 239);
}

.slide-two {
  background: rgb(103, 195, 132);
}

.slide-three {
  background: rgb(225, 119, 218);
}

.slide-four {
  background: #f66363;
}`;
