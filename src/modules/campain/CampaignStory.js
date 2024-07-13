import React from "react";
import StoryCard from "./parts/story/StoryCard";
import TextHighlight from "../../components/TextHighlight";

const CampaignStory = () => {
  return (
    <div className="w-1/2">
      <h1 className="mb-4 text-lg font-semibold uppercase text-text1">Story</h1>
      <div className="shadow-sm bg-whiteSoft">
        <StoryCard>
          <p className="text-text3">
            Capture everything in 4k, with extended battery life and pro-g
            inspired features. Choose from three{" "}
            <TextHighlight className="text-text2">
              4k recording modes
            </TextHighlight>
            : UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect and
            stream your footage wirelessly directly to your iOS and Android
            smartphones or tablets for instant sharing. The monitor has a 3.5"
            touch screen for easy navigation and built-in wifi that
            automatically connects to the last used smartphone or tablet once
            paired.
          </p>
        </StoryCard>
        <StoryCard>
          <p className="text-text3">
            Built with an advanced{" "}
            <TextHighlight className="text-text2">
              4K image sensor and a Super
            </TextHighlight>{" "}
            35 imaging processer the GH4 is able to capture cinema quality
            images with astonishing detail. This camera has evolved into a great
            all-rounder for photography or filmmaking.
          </p>
        </StoryCard>
        <StoryCard>
          <p className="text-text3">
            Capture everything in 4k, with extended battery life and pro-g
            inspired features. Choose from three{" "}
            <span className="font-semibold text-text2">4k recording modes</span>
            : UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect and
            stream your footage wirelessly directly to your iOS and Android
            smartphones or tablets for instant sharing. The monitor has a 3.5"
            touch screen for easy navigation and built-in wifi that
            automatically connects to the last used smartphone or tablet once
            paired.
          </p>
        </StoryCard>
      </div>
    </div>
  );
};

export default CampaignStory;
