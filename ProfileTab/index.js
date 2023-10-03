import { View, StyleSheet  } from "react-native";
import React from "react";
import ProfileSection from "./ProfileSection";
import TabSection from "./TabSection";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileSection />
      <TabSection />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
