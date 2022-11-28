import { useRoute } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity
} from "react-native";
import { COLORS, SIZES, FONTS, icons } from "./constants/index";
import Disc1 from './DiscountAssets/discount1.png';
import Disc2 from './DiscountAssets/discount2.png';
import Disc3 from './DiscountAssets/discount3.png';
import Disc4 from './DiscountAssets/discount4.png';

const DiscountScreen = () => {
    const route = useRoute();
    const brandName = route.params?.item
    console.log(brandName)
    const featuresData = [
        {
            id: 1,
            // icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            // icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            // icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            // icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            // icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            // icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            // icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            // icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,

            img: Disc1,
            title: "Flash Sale",
            description: "Until Stock Lasts. Grab it now!"
        },
        {
            id: 2,
            img: Disc2,
            title: "Clean it before its over",
            description: "All toiletaries on sale"
        },
        {
            id: 3,
            img: Disc3,
            title: "iPhone Sale is back",
            description: "Grab this Apple today"
        },
        {
            id: 4,
            img: Disc4,
            title: "Eat it before you mean it",
            description: "Soups , Pasta @ 60% OFF"
        },
    ]

    const [features, setFeatures] = React.useState(featuresData)
    const [specialPromos, setSpecialPromos] = React.useState(specialPromoData)

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', marginVertical: SIZES.padding * 2 }}>
                <View style={{ flex: 1 , marginTop:30}}>
                    <Text style={{ ...FONTS.h1 }}>Discounts</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.gray }}>From {brandName}</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.lightGray
                        }}
                    >
                        <Image
                            // source={icons.bell}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.secondary
                            }}
                        />
                        <View
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                height: 10,
                                width: 10,
                                backgroundColor: COLORS.red,
                                borderRadius: 5
                            }}
                        >
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    function renderBanner() {
        return (
            <View
                style={{
                    height: 120,
                    borderRadius: 20,
                }}
            >
                <Image
                    // source={images.banner}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures() {

        const Header = () => (
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
                onPress={() => console.log(item.description)}
            >
                <View
                    style={{
                        height: 50,
                        width: 50,
                        marginBottom: 5,
                        borderRadius: 20,
                        backgroundColor: item.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        // source={item.icon}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>{item.description}</Text>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={Header}
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2 }}
            />
        )
    }

    function renderPromos() {

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {/* {renderFeatures()} */}
                {renderPromoHeader()}
            </View>
        )

        const renderPromoHeader = () => (
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: SIZES.padding
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("View All")}
                >
                    <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
                </TouchableOpacity>
            </View>

        )

        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{
                    marginVertical: SIZES.base,
                    width: SIZES.width / 2.5
                }}
                onPress={() => console.log(item.title)}
            >
                <View
                    style={{
                        height: 80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        // backgroundColor: COLORS.primary
                    }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20
                        }}
                    />
                </View>

                <View
                    style={{
                        padding: SIZES.padding,
                        backgroundColor: COLORS.lightGray,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                    <Text style={{ ...FONTS.body5 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                ListHeaderComponent={HeaderComponent}
                contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                data={specialPromos}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={
                    <View style={{ marginBottom: 80 }}>
                    </View>
                }
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderPromos()}
        </SafeAreaView>
    )

 
  return (
    <View>
      <Text>khkjshfjkhfkjs</Text>
    </View>
  )
}

export default DiscountScreen;