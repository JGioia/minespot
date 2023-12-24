import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { IRootState } from "../redux/store";
import { useCallback } from "react";
import { setEarthCheese } from "../redux/reducer";

import "./HarvestCard.css";
import { Box } from "../components/Box";
import { Inline } from "../components/Inline";
import { Stack } from "../components/Stack";

export const HarvestCard = () => {
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);
  const dispatch = useDispatch();

  const clickCookie = useCallback(
    () => dispatch(setEarthCheese(earthCheese + 1)), 
    [dispatch, earthCheese]
  );

  return (
    <div className="harvest-card">
      <Box>
        <Stack>
          <h2>Earth Cheese</h2>
          <Inline>
            <Button onClick={clickCookie}>🧀</Button>
            <Button>Upgrade cheese factory</Button>
          </Inline>
        </Stack>
      </Box>
    </div>
  );
}