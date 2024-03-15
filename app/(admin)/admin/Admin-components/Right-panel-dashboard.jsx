import './components.css';
import LargeScreen_panelDash from './LargeScreen_panelDash';
import SmallScreen_panelDash from './SmallScreen_panelDash';

export default function Right_panel_dashboard({property}) {
  return (
    <>
      <LargeScreen_panelDash property={property} />
      <SmallScreen_panelDash property={property} />
    </>
  );
}
