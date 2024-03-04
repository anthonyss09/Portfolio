"use client";
import { storeSnippet } from "../snippets/blog-one/storeOne";
import CodeSnippet from "../../../components/CodeSnippet";
import { apiSliceOne } from "../snippets/blog-one/apiSliceOne";
import { indexSnippet } from "../snippets/blog-one/indexOne";
import { serverSnippet } from "../snippets/blog-one/serverOne";
import { serverJsonSnippet } from "../snippets/blog-one/serverJsonOne";
import { nodeDockerSnippet } from "../snippets/blog-one/nodeDockerOne";
import { reactDockerSnippet } from "../snippets/blog-one/reactDockerOne";
import { composeSnippet } from "../snippets/blog-one/composeOne";
import { nginxSnippet } from "../snippets/blog-one/nginxOne";
import gcpAccount from "/public/assets/images/gcp-account-one.png";
import Link from "next/link";
import Image from "next/image";
import firstProject from "/public/assets/images/first-project.png";
import CLI from "/public/assets/images/gcloudCLI.png";
import artifactRegistry from "/public/assets/images/artifact-registry.png";
import pushImages from "/public/assets/images/push-pull-images-1.png";
import feContainer from "/public/assets/images/fe-container-config-1.png";
import feContainer2 from "/public/assets/images/fe-container-port-1.png";
import beContainer from "/public/assets/images/add-be-container.png";
import backPic from "/public/assets/images/dataFlow.jpg";

export default function postOne() {
  return (
    <>
      {" "}
      <div className="post-center">
        {" "}
        <header>
          <h2 className="post-title">
            {" "}
            Deploy dockerized React/Nginx app featuring Redux & RTK with Node.js
            in serverless Google Cloud Run containers.
          </h2>
          <span className="blog-credits-container">
            <span className="column">
              <p className="blog-credits">Anthony Toffetti </p>
              <p className="date">1/14/2024</p>
            </span>
          </span>
          <Image src={backPic} className="post-pic-header" />
        </header>
        <main className="post-main">
          {" "}
          <section className="post-section">
            {" "}
            <h3> Application overview</h3>
            <h5>React</h5>
            <p className="blog-main-p">
              {" "}
              React is a popular front end library and state management tool for
              building front end web applications. With React combined with
              Redux and Redux Toolkit we have a predictable state container and
              the recommended way of writing logic for that container.
            </p>
            <h5>NodeJS</h5>
            <p className="blog-main-p">
              {" "}
              Nodejs is a popular javascript runtime efficient in building
              scalable network applications and is easily reachable by a React
              front end.
            </p>
            <h5>Docker</h5>
            <p className="blog-main-p">
              {" "}
              Docker containers are an efficient, lightweight option for
              delivering applications to the web. A docker container is built
              from a docker image using a set of instructions in a dockerfile.
              Once the images are built we can ship our entire app without
              carrying around all that code.
            </p>
            <h5>Nginx</h5>
            <p className="blog-main-p">
              {" "}
              Nginx is a web server that offers production ready performance and
              notably handles many concurrent requests.
            </p>
            <h5>Google Cloud Run</h5>
            <p className="blog-main-p">
              Google Cloud Platform offers a serverless deployment service
              called Google Cloud Run. Serverless deployment is becoming
              increasingly popular. Despite what the name indicates Cloud Run &
              other 'serverless' options do have operating servers, it's just
              the server management they've removed from a developer's plate. A
              serverless deployment may also be a desireable option for it's
              fast auto scaling. Cloud Run services can be configured to scale
              to 0, so when they are not running, you are not paying.
            </p>
            <h4>Prerequisites</h4>
            <ul className="blog-list-prerequisites">
              <li>Javascript</li>
              <li>React & some familiarity with Redux Tool Kit</li>
              <li>Node.js</li>
              <li>Docker installed locally</li>
            </ul>
          </section>
          <section className="post-section">
            {" "}
            <h3>Section 1: Create React app & install Redux.</h3>
            <h4>Section Overview:</h4>
            <p className="blog-main-p">
              In this section we will quickly go over the steps to build a React
              app with Redux using create react app. Let's begin.
            </p>
            <p className="blog-main-p">
              {" "}
              Open terminal & navigate to where you keep your project folders.
              Execute the following commands.
            </p>
            <CodeSnippet
              code={`mkdir --your-project-name-- \ncd --your-project-name-- \nnpx create-react-app client \ncd client \nnpm install @reduxjs/toolkit react-redux`}
            />
            <p className="blog-main-p">
              {" "}
              Add features and api directories as followed
              /client/src/features/api then create apiSlice.js. This is where we
              write our query with help from Redux Toolkit that will reach our
              node server.
            </p>
            <h5 className="path">/client/src/features/api/apiSlice.js</h5>
            <CodeSnippet language="javascript" code={apiSliceOne} />
            <p className="blog-main-p">
              {" "}
              Create and configure store in /client/src/app/. Here we import
              reducers and define reducer paths, and in this case adding
              middleware from our apiSlice.
            </p>
            <h5 className="path">/client/src/app/store.js</h5>
            <CodeSnippet language="javascript" code={storeSnippet} />
            <p className="blog-main-p">
              Make changes to /client/index.js refer to the comments. Here we
              are importing Provider and store then wrapping our entire app with
              provider so we can pass our store to the entire app.
            </p>
            <h5 className="path">/client/src/index.js</h5>
            <CodeSnippet language="javascript" code={indexSnippet} />
            <p className="blog-main-p">
              Add proxy to package.json so any requests that don't match our
              front end's address with be proxied there.
            </p>
            <h5 className="path">/client/src/package.json</h5>
            <CodeSnippet
              language="javascript"
              code={`"proxy": "http://localhost:8080"`}
            />
          </section>
          <section className="post-section">
            <h3>Section 2: Create Node.js backend.</h3>
            <h4>Section Overview:</h4>
            <p className="blog-main-p">
              In this section we will build a simple node server and have it
              listen on port 8080 which is where we are proxying requests from
              our front end.
            </p>
            <p className="blog-main-p">
              Create server directory in root. Cd into server & run the
              following command.
            </p>
            <CodeSnippet language="javascript" code={`npm init -y`} />
            <p className="blog-main-p">Create server.js in /server</p>
            <h5 className="path">/server/server.js</h5>
            <CodeSnippet language="javascript" code={serverSnippet} />
            <p className="blog-main-p">
              Install dependancies. Concurrently is a package used for
              simultaneously spinning up front and backends in development.
            </p>
            <CodeSnippet
              language="javascript"
              code={`npm install express dotenv cors concurrently`}
            />
            <p className="blog-main-p">Add scripts to /server/package.json</p>
            <h5 className="path">/server/packag.json</h5>
            <CodeSnippet language="javascript" code={serverJsonSnippet} />
            <p className="blog-main-p">
              Cd into server execute the following command to test app locally.
            </p>
            <CodeSnippet code={`npm run dev`} />
          </section>
          <section className="post-section">
            {" "}
            <h3>Section 3: Dockerize application.</h3>
            <h4>Section Overview:</h4>
            <p className="blog-main-p">
              In this section we build docker images for our application then
              test them in local docker containers with docker compose. We'll
              need dockerfiles for both our front and back ends & a
              docker-compose.YML file to instruct docker compose. Let's start
              with the dockerfile for our React app.
            </p>
            <p className="blog-main-p">
              The dockerfile for our React app is also where we build the nginx
              web server. We'll instruct docker to build our application in
              stages. First we instruct docker how to build the React
              application then we add instructions for nginx & copy our first
              stage into the nginx build. We'll add & copy an nginx
              configuration file as well.
            </p>
            <h5 className="path">/client/dockerfile</h5>
            <CodeSnippet language="dockerfile" code={reactDockerSnippet} />
            <p className="blog-main-p">
              We instructed our front end docker image build to copy the
              nginx.conf file from /client/nginx/, so let's add it now.
            </p>
            <h5 className="path">/client/nginx/nginx.conf</h5>
            <CodeSnippet language="nginx" code={nginxSnippet} />
            <p className="blog-main-p">
              Now let's add the dockerfile for our Node server.
            </p>
            <h5 className="path">/server/dockerfile</h5>
            <CodeSnippet language="dockerfile" code={nodeDockerSnippet} />
            <p className="blog-main-p">
              Now we'll add a bare bones docker-compose.YML file in root where
              we define front & back end services and tell docker compose which
              to run first.
            </p>
            <h5 className="path">/docker-compose.YML</h5>
            <CodeSnippet language="dockerfile" code={composeSnippet} />
            <p className="blog-main-p">
              Now that we have our dockerfiles in place let's start building the
              images. Make sure you have docker installed on your machine &
              continue.
            </p>
            <p className="blog-main-p">
              First let's build the front end image with the following commands.
            </p>
            <CodeSnippet code={`cd client \ndocker build -t react-app .`} />
            <p className="blog-main-p">Navigate back to root.</p>
            <CodeSnippet code={`cd server \ndocker build -t node-server .`} />
            <p className="blog-main-p">
              Navigate back to root & test app locally with docker compose.
            </p>
            <CodeSnippet code={`docker compose up`} />
            <p className="blog-main-p">
              Now we should see our app in the browser at http://localhost:3000.
              Stop the docker containers with docker compose down.
            </p>
            <CodeSnippet code={`docker compose down`} />
          </section>
          <section className="post-section">
            <h3>Section 4: Deploy on Google Cloud Run.</h3>
            <p className="blog-main-p">
              In this last section we will deploy our application to Google
              Cloud Platform in Cloud Run containers. Within this section we
              will create a GCP project and push our local docker images to
              Google's Artifact Registry. We will start a Cloud Run service
              container using our front end image from the registry & add a
              sidecar container using our back end image. Lastly we will
              configure our project's YAML file with instructions on running our
              container services.
            </p>
            <p className="blog-main-p">
              To start you will need to create a free Google Cloud Platform
              account if you do not already have one. You will need a gmail
              account & card info for this step.{" "}
            </p>
            <Link
              href="https://console.cloud.google.com/getting-started?pli=1"
              className="link link-blog"
            >
              https://console.cloud.google.com/getting-started?pli=1
            </Link>
            <Image src={gcpAccount} className="post-pic" />
            <p className="blog-main-p">
              Once you have access to a GCP account navigate to the console
              dashboard and create a new project. Choose your billing account to
              enable billing. Once we are finished with this section be sure to
              shutdown services & delete project to avoid incurring any charges.
            </p>
            <Image src={firstProject} className="post-pic" />
            <p className="blog-main-pic">
              Now we will push our local docker images to the Google Cloud
              Registry. To do this you will need to have the gcloud CLI
              installed. You can find instructions here.
            </p>
            <p className="blog-main-p">
              {" "}
              <Link
                href="https://cloud.google.com/sdk/docs/install"
                className="link link-blog"
              >
                https://cloud.google.com/sdk/docs/install
              </Link>
            </p>
            <Image src={CLI} className="post-pic" />
            <p className="blog-main-p">
              Before we push our images to GCP we need to create repositories in
              Google's Artifact Registry for both front and back ends.{" "}
            </p>
            <Image className="post-pic" src={artifactRegistry} />
            <p className="blog-main-p">
              Now that we have our repositories created in the Artifact Registry
              let's push our local images. The following will describe the
              process for pushing local docker files to the registry. Repeat the
              process for both front & back end applications and be sure to push
              them to their respective repository which we created in the last
              step. You may need to run the following command to authorize
              connection to your project.
            </p>
            <CodeSnippet
              code={`gcloud auth login
`}
            />
            <p className="blog-main-p">
              {" "}
              <Link
                href="https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling"
                className="link link-blog"
              >
                https://cloud.google.com/artifact-registry/docs/docker/pushing-and-pulling
              </Link>
            </p>
            <Image className="post-pic" src={pushImages} />
            <p className="blog-main-p">
              Now we will create & configure our Cloud Run service. Navigate to
              Cloud Run in your console & click create service. Choose the
              container image url from your front end repository, name your
              service, choose a region & set container port to 80.
            </p>
            <Image src={feContainer} className="post-pic" />
            <Image src={feContainer2} className="post-pic" />
            <p className="blog-main-p">
              {" "}
              Now scroll down to add container. Choose the image from our back
              end registry as container image url & set a PORT env variable to
              8080.
            </p>
            <Image src={beContainer} className="post-pic" />
            <p className="blog-main-p">
              Now deploy service. You can click the link for our app but it
              won't work until we configure our YAML file. Let's do that now.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
