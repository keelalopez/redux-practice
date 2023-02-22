import React from "react";
// STEP 1: IMPORT THE HOOK
import { useSelector } from "react-redux";

function Users() {
  // STEP 2: CALL HOOK INSIDE COMPONENT AND SAVE
  const storeState = useSelector (state => state)

  // STEP 3: SAVES USERS ARRAY USING THE STORESTATE VARIABLE
  const cousins = storeState.cousins

  // STEP 4: COUNTS USERS
  const cousinCount = useSelector((state) => state.cousins.length);
  
  // STEP 5: ITERATE THROUGH STORE AND DISPLAY
  return (
    <div>
    
      <ul>
        {cousins.map((each) => (
          <li key={each.name}>{each.name}</li>
        ))}
      </ul>
      Total Cosuins: {cousinCount}
    </div>
  );
}

export default Users;
