import React, { useState, useEffect, useContext } from "react";
import PageReaderContext from "../../../context/PageReaderContext";
import IconButtonMenu from "../../utilities/IconButtonMenu";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

const GoToNumberPageMenu = () => {
  const { setCurrentNumberPage, currentNumberPage, totalNumberPages } = useContext(PageReaderContext);

  const [numberPageToGo, setNumberPageToGo] = useState(currentNumberPage);

  const handleNumberPageToGo = (event) => {
    setNumberPageToGo(parseInt(event.target.value) || "");
  };

  const goToPageNumber = () => {
    setCurrentNumberPage(numberPageToGo);
  };

  const disableGoToPageButtonIf = () => {
    return numberPageToGo < 0 || numberPageToGo > totalNumberPages;
  };

  useEffect(() => {
    setNumberPageToGo(currentNumberPage);
  }, [currentNumberPage]);

  return (
    <div>
      <IconButtonMenu icon={<MoreVertRoundedIcon />}>
        <div
          style={{
            padding: "0 1rem",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <TextField
            id="GoToNumberPage"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
            value={numberPageToGo}
            onChange={handleNumberPageToGo}
          />
          <Button
            sx={{ marginLeft: "10px" }}
            color="primary"
            variant="outlined"
            onClick={goToPageNumber}
            disabled={disableGoToPageButtonIf()}
          >
            Go
          </Button>
        </div>
      </IconButtonMenu>
    </div>
  );
};

export default GoToNumberPageMenu;
