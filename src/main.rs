#![allow(non_snake_case)]

use dioxus::prelude::*;
use dioxus_logger::tracing::{info, Level};

fn main() {
    dioxus_logger::init(Level::INFO).expect("failed to init logger");
    info!("starting app");

    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        link { rel: "stylesheet", href: "styles/main.css" }
        script { src: "scripts/p5.min.js" }
        script { src: "scripts/constants.js" }
        script { src: "scripts/sketch.js" }
        script { src: "scripts/bird.js" }
        script { src: "scripts/pipe.js" }
        script { src: "scripts/ground.js" }
    }
}
