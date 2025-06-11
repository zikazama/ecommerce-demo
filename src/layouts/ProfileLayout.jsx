import HomeHeader from "../components/HomeHeader";
import ExpensiveCalculation from "../components/ExpensiveCalculation";
import CallbackExample from "../components/CallbackExample";

const ProfileLayout = () => {
  return (
    <>
      <HomeHeader />
      <div className="profile-layout">
        <main className="profile-content" style={{display: 'block', padding: '100px' }}>
          <h1>Profile Page</h1>
          <ExpensiveCalculation />
          <hr style={{ margin: '30px 0' }} />
          <CallbackExample />
        </main>
      </div>
    </>
  );
};
export default ProfileLayout;