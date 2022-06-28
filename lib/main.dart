import 'dart:convert';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class Item {
  final name;
  final code;
  Item(this.name, this.code);
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      scrollBehavior: MaterialScrollBehavior().copyWith(
        dragDevices: {
          PointerDeviceKind.mouse,
          PointerDeviceKind.touch,
          PointerDeviceKind.stylus,
          PointerDeviceKind.unknown
        },
      ),
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() {
    return _MyHomePageState();
  }
}

class _MyHomePageState extends State<MyHomePage> {
  List<Item> items = [];
  final TextEditingController _textEditingController = TextEditingController();
  String _key = '';

  @override
  void initState() {
    super.initState();
    Future.microtask(() async {
      // get data
      var url = Uri.parse(
          'https://cors-get-proxy.sirjosh.workers.dev/?url=https://raw.staticdn.net/flutter/flutter/master/packages/flutter/lib/src/material/icons.dart'); // 跨域
      var response = await http.get(url);
      String responseBody = response.body;

      RegExp exp1 = new RegExp(
          r"static const IconData (.*?) = IconData\((.*?), fontFamily: 'MaterialIcons'\);"); // 提取邮箱
      var matchs = exp1.allMatches(responseBody);
      var names = matchs.map((m) => m.group(1)).toList();
      var codes = matchs.map((m) => m.group(2)).toList();
      for (int i = 0; i < names.length; i++) {
        String name = names[i] ?? '';
        String code = codes[i] ?? '';
        items.add(Item(name, code));
      }
      setState(() {});
    });

    _textEditingController.addListener(() {
      setState(() {
        _key = _textEditingController.text;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    List<Item> tmpList = items.where((it) {
      if ('' == _key) {
        return true;
      }
      return it.name.contains(_key);
    }).toList();
    return Scaffold(
      body: Column(
        children: [
          SizedBox(
            width: 400,
            child: TextField(
              decoration: const InputDecoration(hintText: 'filter'),
              controller: _textEditingController,
            ),
          ),
          Expanded(
              child: tmpList.isNotEmpty
                  ? GridView.builder(
                      itemCount: tmpList.length,
                      gridDelegate:
                          const SliverGridDelegateWithFixedCrossAxisCount(
                              crossAxisCount: 8,
                              mainAxisSpacing: 15.0,
                              crossAxisSpacing: 15.0,
                              childAspectRatio: 0.6),
                      itemBuilder: (BuildContext context, int i) {
                        Item it = tmpList[i];
                        return InkWell(
                          onHover: ((value) {
                            print(value);
                          }),
                          child: Material(
                            elevation: 0,
                            color: Colors.white,
                            child: Container(
                              margin: const EdgeInsets.all(20),
                              child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  children: [
                                    Icon(
                                        IconData(int.parse(it.code),
                                            fontFamily: 'MaterialIcons'),
                                        size: 50),
                                    Text(
                                      it.name,
                                      textAlign: TextAlign.center,
                                    )
                                  ]),
                            ),
                          ),
                        );
                      })
                  : const Center(
                      child: Text('Loading...'),
                    ))
        ],
      ),
    );
  }
}
