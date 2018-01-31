import React, { Component } from "react";
import {
  Text,
  View,
  LayoutAnimation,
  Alert,
  ScrollView,
  AppRegistry
} from "react-native";

import _ from "lodash";
import {
  DragContainer,
  Draggable,
  DropZone
} from "react-native-drag-drop-and-swap";

class MyDropZoneContent extends React.Component {
  componentWillReceiveProps({ dragOver }) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return (
      <View
        style={{
          width: this.props.dragOver ? 110 : 100,
          height: this.props.dragOver ? 110 : 100,
          backgroundColor: "#e0c269",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View>
          <Text style={{fontWeight:"bold",color:"#fff"}}>{"Hold Here"}</Text>
        </View>
      </View>
    );
  }
}

class DeleteZone extends React.Component {
  componentWillReceiveProps({ dragOver }) {
    if (dragOver !== this.props.dragOver) LayoutAnimation.easeInEaseOut();
  }
  render() {
    return (
      <View
        style={{
          top: this.props.dragOver ? 0 : -100,
          height: 100,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <View>
          <Text>{"DELETE"}</Text>
        </View>
      </View>
    );
  }
}

class DraggyInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [
        "blue",
        "blueviolet",
        "brown",
        "chocolate",
        "coral",
        "cornflowerblue",
        "darkcyan",
        "darkgoldenrod",
        "darkgreen",
        "darkkhaki",
        "darkmagenta",
        "darkolivegreen",
        "darkorange",
        "darkorchid",
        "darkred",
        "darksalmon",
        "darkseagreen",
        "darkslateblue",
        "darkslategrey",
        "darkturquoise",
        "darkviolet",
        "deeppink",
        "deepskyblue",
        "dimgray",
        "dimgrey",
        "dodgerblue",
        "firebrick",
        "floralwhite",
        "forestgreen",
        "fuchsia",
        "gainsboro",
        "ghostwhite",
        "gold",
        "goldenrod",
        "gray",
        "green",
        "greenyellow",
        "grey",
        "honeydew",
        "hotpink",
        "indianred",
        "indigo",
        "ivory",
        "khaki",
        "magenta",
        "maroon",
        "mediumaquamarine",
        "mediumblue",
        "mediumorchid",
        "mediumpurple",
        "mediumseagreen",
        "mediumslateblue",
        "mediumspringgreen",
        "mediumturquoise",
        "mediumvioletred",
        "midnightblue",
        "mintcream",
        "mistyrose",
        "moccasin",
        "navajowhite",
        "navy",
        "oldlace",
        "olive",
        "olivedrab",
        "orange",
        "orangered",
        "orchid",
        "palegoldenrod",
        "palegreen",
        "paleturquoise",
        "palevioletred",
        "papayawhip",
        "peachpuff",
        "peru",
        "pink",
        "plum",
        "powderblue",
        "purple",
        "rebeccapurple",
        "red",
        "rosybrown",
        "royalblue",
        "saddlebrown",
        "salmon",
        "sandybrown",
        "seagreen",
        "seashell",
        "sienna",
        "silver",
        "skyblue",
        "slateblue",
        "slategray",
        "snow",
        "springgreen",
        "steelblue",
        "tan",
        "teal",
        "thistle",
        "tomato",
        "turquoise",
        "violet",
        "wheat",
        "white",
        "whitesmoke",
        "yellow",
        "yellowgreen"
      ]
    };
  }
  render() {
    if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
      LayoutAnimation.easeInEaseOut();
      return (
        //

        <View
          style={{
            width: this.props.dragOver ? 110 : 100,
            alignItems: "center",
            justifyContent: "center",
            height: this.props.dragOver ? 110 : 100,
            backgroundColor: "rgba(255,0,0,.7)"
          }}
        >
          <Text
            style={{
              color: this.state.color[this.props.index],
              fontSize: 50,
              fontWeight: "bold"
            }}
          >
            {" "}
            {this.props.alphabet.data}{" "}
          </Text>
        </View>
      );
    }
    let shadows = {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      opacity: 0.5
    };
    return (
      <View
        style={[
          {
            height: 100,
            width: 100,
            backgroundColor: this.props.ghost
              ? this.state.color[this.props.index]
              : this.state.color[this.props.index + 4],
            alignItems: "center",
            justifyContent: "center"
          },
          this.props.dragging ? shadows : null
        ]}
      >
        <Text
          style={{
            color: this.state.color[this.props.index],
            fontSize: 50,
            fontWeight: "bold"
          }}
        >
          {this.props.alphabet.data}
        </Text>
      </View>
    );
  }
}

class Draggy extends React.Component {
  render() {
    return (
      <Draggable data={this.props.alphabet} style={{ margin: 7.5 }}>
        <DropZone
          disabled
          onDrop={e => this.props.onDrop(e, this.props.index)}
          onEnter={e =>
            this.props.onHover(this.props.alphabet, this.props.index)
          }
        >
          <DraggyInner
            alphabet={this.props.alphabet}
            index={this.props.index}
          />
        </DropZone>
      </Draggable>
    );
  }
}
let alphaData = [];
let first = "A",
  last = "I";
for (var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
  alphaData.push({ data: eval("String.fromCharCode(" + i + ")"), id: i });
}

class DDNH extends Component {
  constructor(props) {
    super(props);
    this.displayName = "DragDropTest";
    this.onDrop = this.onDrop.bind(this);
    this.onHover = this.onHover.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      alphabets: alphaData,
      hoverData: {},
      dropData: {},
      hoverDataIndex: null
    };
  }
  onDrop(data, index) {
    let alphabets = this.state.alphabets.map((item, i) => {
      if (item.id == data.id) {
        return this.state.hoverData;
      }
      if (item.id == this.state.hoverData.id) {
        return data;
      }
      return item;
    });
    this.setState({ alphabets });
  }
  onDelete(e) {
    let data = this.state.alphabets || [];
    let alphabets = data.map((item, i) => {
      if (e.id === item.id) {
        return { id: e.id, data: "" };
      } else {
        return item;
      }
    });
    this.setState({ alphabets });
  }

  onHover(hoverData, hoverDataIndex) {
    this.setState({ hoverData, hoverDataIndex });
  }
  render() {
    return (
      <DragContainer>
        <View style={{ flex: 1, justifyContent: "space-around",paddingTop:20 }}>
          {/* <View style={{ flex: 0.1 }}> */}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center",
                color: "#f900f9"
              }}
            >
              Drag Drop and Hold
            </Text>
          {/* </View> */}
          <View style={{ flex: 0.2 }}>
            <View
              style={{
                flex: 1,
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <DropZone onDrop={e => console.log("Dropped it on area 1", e)}>
                <MyDropZoneContent />
              </DropZone>
              <DropZone onDrop={e => console.log("Dropped it on area 2", e)}>
                <MyDropZoneContent />
              </DropZone>
            </View>
          </View>

          <View style={{ flex: 0.7, justifyContent: "center" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flexDirection: "row",
                flexWrap: "wrap"
              }}
            >
              {this.state.alphabets.map((item, i) => (
                <Draggy
                  key={i}
                  alphabet={item}
                  onHover={this.onHover}
                  onDrop={this.onDrop}
                  index={i}
                />
              ))}
            </View>
          </View>
        </View>
      </DragContainer>
    );
  }
}

export default DDNH;

//AppRegistry.registerComponent("UCLFantasy", () => App);
