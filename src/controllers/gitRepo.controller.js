const { Octokit } = require("octokit");
const octokit = new Octokit();

const getRepos = async (req, res) => {
    try {
        const { user } = req.params
        const { page, limit } = req.query
        const result = await octokit.request("GET /users/{user}/repos?per_page={limit}&page={page}", {
            user: user,
            per_page: limit,
            page: page
        });

        if (result.data.message == "Not Found") {
            res.status(404).json({ "message": "No user found" })
        }
        let data = []
        // let data = [
        //     {
        //         "name": ".github",
        //         "description": null,
        //         "topics": [

        //         ],
        //         "id": 256048704
        //     },
        //     {
        //         "name": "aggregator-app",
        //         "description": "serverless function with api aggregator with azure",
        //         "topics": [

        //         ],
        //         "id": 99453963
        //     },
        //     {
        //         "name": "all-contributors",
        //         "description": "✨ Recognize all contributors, not just the ones who push code ✨",
        //         "topics": [

        //         ],
        //         "id": 266203293
        //     },
        //     {
        //         "name": "angular",
        //         "description": "One framework. Mobile & desktop.",
        //         "topics": [

        //         ],
        //         "id": 242366845
        //     },
        //     {
        //         "name": "angular-2-first-look-launcher",
        //         "description": "deprecated",
        //         "topics": [

        //         ],
        //         "id": 49308796
        //     },
        //     {
        //         "name": "angular-architecture",
        //         "description": "Examples of Angular Architecture Concepts",
        //         "topics": [

        //         ],
        //         "id": 252189987
        //     },
        //     {
        //         "name": "angular-cli",
        //         "description": "CLI tool for Angular",
        //         "topics": [

        //         ],
        //         "id": 111557274
        //     },
        //     {
        //         "name": "angular-cosmosdb",
        //         "description": "Cosmos DB, Express.js, Angular, and Node.js app",
        //         "topics": [

        //         ],
        //         "id": 97331634
        //     },
        //     {
        //         "name": "angular-event-view-cli",
        //         "description": "Angular Demo with a Little bit of a lot of features",
        //         "topics": [
        //             "angular",
        //             "typescript"
        //         ],
        //         "id": 80428917
        //     },
        //     {
        //         "name": "angular-expiring-http-cache",
        //         "description": null,
        //         "topics": [

        //         ],
        //         "id": 91488884
        //     },
        //     {
        //         "name": "angular-first-look-examples",
        //         "description": "angular first look for pluralsight",
        //         "topics": [

        //         ],
        //         "id": 50220494
        //     },
        //     {
        //         "name": "angular-first-look-hosted",
        //         "description": "Hosted Code from Pluralsight Course \"Angular First Look\"",
        //         "topics": [

        //         ],
        //         "id": 70656053
        //     },
        //     {
        //         "name": "angular-lazy-load-demo",
        //         "description": "Lazy loading Angular components",
        //         "topics": [
        //             "angular",
        //             "html",
        //             "typescript"
        //         ],
        //         "id": 240809609
        //     },
        //     {
        //         "name": "angular-ngrx-data",
        //         "description": "Angular with ngRx and experimental ngrx-data helper",
        //         "topics": [
        //             "angular",
        //             "ngrx",
        //             "rxjs"
        //         ],
        //         "id": 112114114
        //     },
        //     {
        //         "name": "Angular-NuGet",
        //         "description": "NuGet Repo for Angular Packages",
        //         "topics": [

        //         ],
        //         "id": 12898794
        //     },
        //     {
        //         "name": "angular-preload-and-interceptors",
        //         "description": null,
        //         "topics": [
        //             "angular",
        //             "http",
        //             "javascript",
        //             "typescript"
        //         ],
        //         "id": 252249810
        //     },
        //     {
        //         "name": "angular-quickstart-lib",
        //         "description": null,
        //         "topics": [

        //         ],
        //         "id": 106325395
        //     },
        //     {
        //         "name": "angular-rxjs-shared-examples",
        //         "description": "rxjs examples",
        //         "topics": [

        //         ],
        //         "id": 199008956
        //     },
        //     {
        //         "name": "angular-styleguide",
        //         "description": "Angular Style Guide: A starting point for Angular development teams to provide consistency through good practices.",
        //         "topics": [

        //         ],
        //         "id": 22362099
        //     },
        //     {
        //         "name": "angular-tour-of-heroes",
        //         "description": "Angular - Tour of Heroes - The Next Step after Getting Started",
        //         "topics": [

        //         ],
        //         "id": 41736138
        //     },
        //     {
        //         "name": "angular-what-if",
        //         "description": null,
        //         "topics": [

        //         ],
        //         "id": 359960994
        //     },
        //     {
        //         "name": "angular.breeze.storagewip",
        //         "description": "Save Work in Progress to Local Storage for Angular and Breeze apps",
        //         "topics": [

        //         ],
        //         "id": 14892983
        //     },
        //     {
        //         "name": "angular2-force",
        //         "description": "ngConf 2016 live coding demo",
        //         "topics": [

        //         ],
        //         "id": 58071014
        //     },
        //     {
        //         "name": "AngularWorkshopLabs",
        //         "description": "Angular and TypeScript Workshop Labs",
        //         "topics": [

        //         ],
        //         "id": 160101578
        //     },
        //     {
        //         "name": "awesome-angular-workshop",
        //         "description": "Angular: The Awesome Parts - Workshop",
        //         "topics": [

        //         ],
        //         "id": 122777681
        //     },
        //     {
        //         "name": "awesome-frameworkless",
        //         "description": "A collection of awesome things regarding Frameworkless",
        //         "topics": [

        //         ],
        //         "id": 216059528
        //     },
        //     {
        //         "name": "awesome-lit-html",
        //         "description": "A curated list of awesome lit-html resources.",
        //         "topics": [

        //         ],
        //         "id": 215315726
        //     },
        //     {
        //         "name": "awesome-vue",
        //         "description": "🎉 A curated list of awesome things related to Vue.js",
        //         "topics": [

        //         ],
        //         "id": 207696680
        //     },
        //     {
        //         "name": "azure-docs",
        //         "description": "Open source documentation of Microsoft Azure",
        //         "topics": [

        //         ],
        //         "id": 536224310
        //     },
        //     {
        //         "name": "Breeze-Angular-Meetup-20130312",
        //         "description": "Material from Ward Bell's Breeze/Angular CRUD Apps Meetup presentation on 12 March 2013 ",
        //         "topics": [

        //         ],
        //         "id": 306434864
        //     }]

        let obj = {};
        result.data.map((res) => {
            obj = {};
            obj.name = res.name;
            obj.description = res.description;
            obj.topics = res.topics;
            obj.id = res.id
            data.push(obj)
        })
        res.json(data)
    } catch (error) {

        res.status(error.response.status).send({ status: error.response.status, message: error.response.data.message })
    }
}

const getPersonalInfo = async (req, res) => {
    try {
        const { user } = req.params
        const result = await octokit.request("GET /users/{user}", {
            user: user,
        });
        if (result.status == 404) {
            res.status(404).json({ "message": "No user found" })
        }
        const info =
        {
            name: result.data.name,
            bio: result.data.bio,
            location: result.data.location,
            twitter_username: result.data.twitter_username,
            avatar_url: result.data.avatar_url,
            html_url: result.data.html_url,
            public_repos: result.data.public_repos
        }
        // {
        //     "name": "John Papa",
        //     "bio": "Winter is Coming",
        //     "location": "Orlando, FL",
        //     "twitter_username": "john_papa",
        //     "avatar_url": "https://avatars.githubusercontent.com/u/1202528?v=4",
        //     "html_url": "https://github.com/johnpapa",
        //     "public_repos": 141
        // }
        res.json(info)
    } catch (error) {
        res.status(error.response.status).send({ status: error.response.status, message: error.response.data.message })
    }
}

module.exports = {
    getRepos,
    getPersonalInfo
}