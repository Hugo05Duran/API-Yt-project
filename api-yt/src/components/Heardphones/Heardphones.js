import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Heardphones() {
  const [isLoading, setIsLoading] = useState(false);
  const [finalArr, setFinalArr] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const myResults = await axios(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              key: "AIzaSyAubX99T1KDvrulV3vGMksy9RypYwkh7M4",
              part: "snippet",
              id: "zmwmQpySD_c,bDtldViqlxI,bSaGhsiE4dY,LDsbQvcoYK8,PG_LsMIT1k0,3i1UK1sLb_8,wpUOa89cEWI,sH3LVOr2AAg",
            },
          }
        );

        filterArrayLinks(myResults.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  function filterArrayLinks(heardphonesData) {
    // eslint-disable-next-line array-callback-return
    const finalArray = heardphonesData.items.map((item) => {
      let newWord = [];
      let newArray = [];
      let word = "";
      for (let i = 0; i < item.snippet.description.length; i++) {
        let caracter = item.snippet.description.charAt(i);

        if (caracter !== " ") {
          word += caracter;
        } else {
          newWord.push(word);
          newArray.push(newWord);
          newWord = [];
          word = "";
        }
      }
      const loquesea = newArray.filter((sentence) => {
        let word = "https://amzn";

        if (sentence[0].includes(word)) {
          return sentence[0].replace(/(\r\n|\n|\r)/gm, "ERICK");
        } else {
          return false;
        }

        // let test = replaceConst.includes(word);
        // console.log(test);
      });
      console.log(loquesea);
      return loquesea;
    });
    setFinalArr(finalArray);
    setIsLoading(true);
  }

  const heardPhonesLinks = () => {
    if (isLoading && !finalArr.lenght > 0) {
      return finalArr.map((item, i) => {
        return (
          <div key={i} className="">
            {item.map((link, j) => {
              return (
                <>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={j}
                    href={link}
                    style={{ color: "black" }}>
                    {link}
                  </a>
                  <br />
                </>
              );
            })}
            <hr />
          </div>
        );
      });
    }
  };
  return <div>{heardPhonesLinks()}</div>;
}
