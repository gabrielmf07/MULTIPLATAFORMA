import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ProfileSection = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [username, setUsername] = useState("John Doe");
  const [bio, setBio] = useState("Food enthusiast and recipe developer");
  const [imagen, setImagen] = useState(null);

  const handleSaveProfile = () => {
    setIsEditMode(false);
  };

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleImageChange = async () => {
    var perResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perResult.granted === false) {
      alert("Se requiere permiso para acceder al equipo");
      return;
    }

    const pickResult = await ImagePicker.launchImageLibraryAsync();
    if (pickResult.canceled == true) {
      return;
    }
    setImagen({ currentUri: pickResult.uri });
  };

  return (
    <View style={styles.container}>
      {isEditMode ? (
        <>
          <TouchableOpacity onPress={handleImageChange}>
            <Image
              style={styles.image}
              source={{
                uri:
                  imagen !== null
                    ? imagen.currentUri
                    : "https://randomuser.me/api/portraits/men/1.jpg",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={styles.input}
            multiline
            value={bio}
            onChangeText={setBio}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
              <Text style={styles.buttonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri:
                  imagen !== null
                    ? imagen.currentUri
                    : "https://randomuser.me/api/portraits/men/1.jpg",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.bio}>{bio}</Text>
          <TouchableOpacity onPress={handleEditProfile}>
            <AntDesign name="edit" size={24} color="#873600" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    marginHorizontal: "auto",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#873600",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ProfileSection;
