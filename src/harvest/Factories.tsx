import { useDispatch, useSelector } from "react-redux";
import { Button } from "../components/Button";
import { IRootState } from "../redux/store";
import { useCallback } from "react";
import { setEarthCheese } from "../redux/reducer";

import "./Factories.css";
import { Box } from "../components/Box";
import { Inline } from "../components/Inline";
import { Stack } from "../components/Stack";

export const Factories = () => {
  return (
    <EarthFactory />
  );
};

const EarthFactory = () => {
  const earthCheese = useSelector((state: IRootState) => state.earthCheese);
  const dispatch = useDispatch();

  const onClickMine = useCallback(
    () => dispatch(setEarthCheese(earthCheese + 1)), 
    [dispatch, earthCheese]
  );

  const upgrade1 = useUpgrade({});
  const upgrade2 = useUpgrade({});

  return (
    <FactoryCard 
      title="Cheese Factory"
      onClickMine={onClickMine}
      mineIcon="🧀"
      upgrade1={upgrade1}
      upgrade2={upgrade2}
      />
  );
}

type JsonUpgrade = {

}

type Upgrade = {
  onClick: () => void,
  title: string,
  description: string,
  buttonText: string,
  disabled: boolean
}

const useUpgrade = (upgrade: JsonUpgrade): Upgrade => {
  return {
    onClick: () => {},
    title: "Bigger Cheese Wheels",
    description: "Each 🧀 is now worth 25% more 💵",
    buttonText: "25 🧀",
    disabled: false
  }
}

const FactoryCard = ({
  title,
  onClickMine, 
  mineIcon,
  upgrade1,
  upgrade2
}: {
  title: string,
  onClickMine: () => void
  mineIcon: string
  upgrade1: Upgrade,
  upgrade2: Upgrade
}) => (
  <Box padding="medium" center className="factory-card">
    <Stack center>
      <h2>{title}</h2>
      <div className="factory-card__content">
        <Button onClick={onClickMine}>
          <h1>
            {mineIcon}
          </h1>
        </Button>
        <Stack center>
          <h3>Upgrades!</h3>
          <UpgradeComponent upgrade={upgrade1} />
          <UpgradeComponent upgrade={upgrade2} />
        </Stack>
      </div>
    </Stack>
  </Box>
);

const UpgradeComponent = ({upgrade}: {upgrade: Upgrade}) => (
  <Stack gap='none'>
    <Inline center gap="large">
      <div className="factory-card__upgrade__title">
        {upgrade.title}
      </div>
      <Button 
        disabled={upgrade.disabled}
        onClick={upgrade.onClick}>
        {upgrade.buttonText}
      </Button>
    </Inline>
    <div>{upgrade.description}</div>
  </Stack>
) 