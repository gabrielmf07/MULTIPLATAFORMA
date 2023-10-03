import { View, ScrollView } from "react-native";
import React from "react";

import CommentCard from "./CommentCard";

const Comments = () => {
  const comment = {
    username: "Alexander N: K.",
    comment: "¡Pienso que la receta fue asombrosa!",
    avatar: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
  };
  return (
    <ScrollView>
      <View>
        <CommentCard comment={comment} />
      </View>
    </ScrollView>
  );
};

export default Comments;
