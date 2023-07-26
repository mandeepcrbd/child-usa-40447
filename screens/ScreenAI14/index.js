import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';

const SurveyScreen = () => {
  return <SafeAreaView style={_styles.SkvsVWSV}>
      <ScrollView contentContainerStyle={{
      flexGrow: 1
    }}>
        <View style={_styles.ZhNgdXlE}>
          <Text style={_styles.fhTIuPwj}>Survey Category</Text>
          <View style={_styles.rYNczFPr}>
            {
            /* Section 1 */
          }
            <View style={_styles.qpceESsF}>
              <Text style={_styles.kdUzogCt}>Section 1</Text>
              <View style={_styles.pdQqhmHW}>
                <Text>Question 1</Text>
                <TouchableOpacity style={_styles.ZbZynQJP}>
                  <Text>Choice 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.YVLdgeoF}>
                  <Text>Choice 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.zJbYKpkQ}>
                  <Text>Choice 3</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text>Question 2</Text>
                <TouchableOpacity style={_styles.ISbjehdx}>
                  <Text>Choice 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.QiCjujzD}>
                  <Text>Choice 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.dVKmBXEO}>
                  <Text>Choice 3</Text>
                </TouchableOpacity>
              </View>
            </View>
            {
            /* Section 2 */
          }
            <View style={_styles.enUqwePr}>
              <Text style={_styles.EqvKMwQY}>Section 2</Text>
              <View style={_styles.VmYQbdMF}>
                <Text>Question 3</Text>
                <TouchableOpacity style={_styles.pgGLAEwI}>
                  <Text>Choice 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.OAzjxNzb}>
                  <Text>Choice 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.rvoUfjME}>
                  <Text>Choice 3</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text>Question 4</Text>
                <TouchableOpacity style={_styles.GvVFzDGd}>
                  <Text>Choice 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.iUAWCwSG}>
                  <Text>Choice 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_styles.RTOzseTB}>
                  <Text>Choice 3</Text>
                </TouchableOpacity>
              </View>
            </View>
            {
            /* Submit Button */
          }
            <TouchableOpacity style={_styles.IUczEpCp}>
              <Text style={_styles.AAOcIpRc}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default SurveyScreen;

const _styles = StyleSheet.create({
  SkvsVWSV: {
    flex: 1
  },
  ZhNgdXlE: {
    flex: 1,
    padding: 16
  },
  fhTIuPwj: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  rYNczFPr: {
    flex: 1
  },
  qpceESsF: {
    marginBottom: 16
  },
  kdUzogCt: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  pdQqhmHW: {
    marginBottom: 8
  },
  ZbZynQJP: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  YVLdgeoF: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  zJbYKpkQ: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  ISbjehdx: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  QiCjujzD: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  dVKmBXEO: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  enUqwePr: {
    marginBottom: 16
  },
  EqvKMwQY: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  VmYQbdMF: {
    marginBottom: 8
  },
  pgGLAEwI: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  OAzjxNzb: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  rvoUfjME: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  GvVFzDGd: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  iUAWCwSG: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  RTOzseTB: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 4
  },
  IUczEpCp: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  AAOcIpRc: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});