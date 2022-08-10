import React, { useState, useEffect } from "react";
//React-Native
import { View, Text, Image, FlatList } from "react-native";
import { Button } from "@react-native-material/core";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// API
import { fetchData } from "./Api.js";
import Item from "./Item";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Page"
          component={MainPage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Connect Wallet" component={ConnectWallet} />
        <Stack.Screen name="Metamask" component={Metamask} />
        <Stack.Screen name="TrustWallet" component={TrustWallet} />
        <Stack.Screen name="MathWallet" component={MathWallet} />
        <Stack.Screen name="TokenPocket" component={TokenPocket} />
        <Stack.Screen name="WalletConnect" component={WalletConnect} />
        <Stack.Screen name="ListMarket" component={ListMarket} />
        <Stack.Screen
          name="BinanceChainWallet"
          component={BinanceChainWallet}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const MainPage = ({ navigation }) => {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Connect to a wallet
      </Text>
      <Button
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "flex-start",
          borderRadius: 25,
        }}
        color="#EEEEEE"
        tintColor="#00D7FF"
        title="Connect Wallet"
        onPress={() => {
          navigation.navigate("Connect Wallet");
        }}
      />
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        List Market
      </Text>
      <Button
        style={{
          marginTop: 30,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        color="#EEEEEE"
        tintColor="#00D7FF"
        title="List Market"
        onPress={() => {
          navigation.navigate("ListMarket");
        }}
      />
    </View>
  );
};

fetchData();
const ListMarket = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Text>{data.length}</Text>
    </View>
  );
};

const ConnectWallet = ({ navigation }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="Metamask"
          onPress={() => {
            navigation.navigate("Metamask");
          }}
        />
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="TrustWallet"
          onPress={() => {
            navigation.navigate("TrustWallet");
          }}
        />
        <Image
          source={{
            uri: "https://trustwallet.com/assets/images/media/assets/TWT.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="MathWallet"
          onPress={() => {
            navigation.navigate("MathWallet");
          }}
        />
        <Image
          source={{
            uri: "http://mathwallet.oss-cn-hangzhou.aliyuncs.com/image/math256.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="Token Pocket"
          onPress={() => {
            navigation.navigate("TokenPocket");
          }}
        />
        <Image
          source={{
            uri: "https://s2.coinmarketcap.com/static/img/coins/200x200/5947.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="WalletConnect"
          onPress={() => {
            navigation.navigate("WalletConnect");
          }}
        />
        <Image
          source={{
            uri: "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button
          style={{
            marginTop: 30,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
          color="#EEEEEE"
          tintColor="#00D7FF"
          title="Binance Chain Wallet"
          onPress={() => {
            navigation.navigate("BinanceChainWallet");
          }}
        />
        <Image
          source={{
            uri: "https://assets-cdn.trustwallet.com/blockchains/binance/info/logo.png",
          }}
          style={{
            height: 25,
            width: 25,
            marginTop: 35,
            marginLeft: 35,
          }}
        />
      </View>
    </View>
  );
};

const Metamask = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Metamask Wallet ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png",
        }}
        style={{
          marginLeft: 125,

          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};
const TrustWallet = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        TrustWallet ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "https://livecryptoo.com/public/storage/wallets/June2021/BeN8rC6MSQksGREMfmnE.png",
        }}
        style={{
          marginLeft: 125,

          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

const MathWallet = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Math Wallet ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "http://medishares.oss-cn-hongkong.aliyuncs.com/logo/math/MathWallet_Logo_Vertical_Black.png",
        }}
        style={{
          marginLeft: 125,
          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

const TokenPocket = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Token Pocket Wallet ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "https://s2.coinmarketcap.com/static/img/coins/200x200/5947.png",
        }}
        style={{
          marginLeft: 125,
          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};
const WalletConnect = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Wallet Connect ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png",
        }}
        style={{
          marginLeft: 125,
          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};
const BinanceChainWallet = () => {
  return (
    <View>
      <Text style={{ textAlign: "center", padding: 20, fontSize: 24 }}>
        Wallet Connect ID: 0x12153246321465315663
      </Text>
      <Image
        source={{
          uri: "https://assets-cdn.trustwallet.com/blockchains/binance/info/logo.png",
        }}
        style={{
          marginLeft: 125,
          justifyContent: "center",
          alignItems: "center",
          width: 150,
          height: 150,
        }}
      />
    </View>
  );
};

export default App;
