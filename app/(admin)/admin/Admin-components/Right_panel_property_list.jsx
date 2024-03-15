import './components.css';
import LargeScreen_propertyListPanel from './LargeScreen_propertyListPanel';
import SmallScreen_propertyListPanel from './SmallScreen_propertyListPanel';

export default function Right_panel_property_list({ property }) {
   console.log(property);
  return (
    <>
      <LargeScreen_propertyListPanel property={property} />
      <SmallScreen_propertyListPanel property={property} />
    </>
  );
}
