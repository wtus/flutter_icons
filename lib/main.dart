import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:icons/responsive.dart';
import 'package:oktoast/oktoast.dart';

class Item {
  final String name;
  final String code;
  Item(this.name, this.code);
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return OKToast(
      child: MaterialApp(
        title: 'Flutter Demo',
        scrollBehavior: const MaterialScrollBehavior().copyWith(
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
        home: GalleryResponsive(
            mobile: MyHomePage(columnCount: 2),
            tablet: MyHomePage(columnCount: 4),
            desktop: MyHomePage(columnCount: 8)),
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  final int columnCount;

  MyHomePage({super.key, required this.columnCount});
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
          // 'https://cors-get-proxy.sirjosh.workers.dev/?url=https://raw.staticdn.net/flutter/flutter/master/packages/flutter/lib/src/material/icons.dart'); // 跨域
          'https://cors.eu.org/https://raw.githubusercontent.com/flutter/flutter/master/packages/flutter/lib/src/material/icons.dart'); // 跨域
      var response = await http.get(url);
      String responseBody = response.body;

      RegExp exp1 = new RegExp(
          r"static const IconData (.*?) = IconData\((.*?), fontFamily: 'MaterialIcons'\);");
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
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 35, vertical: 20),
        child: Column(
          children: [
            Material(
              color: Colors.white,
              elevation: 10,
              borderRadius: BorderRadius.circular(10),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                width: 400,
                child: TextField(
                  autofocus: true,
                  decoration: const InputDecoration(
                      hintText: 'Search icons', border: InputBorder.none),
                  controller: _textEditingController,
                ),
              ),
            ),
            const SizedBox(height: 20),
            Expanded(
                child: tmpList.isNotEmpty
                    ? GridView.builder(
                        itemCount: tmpList.length,
                        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: widget.columnCount,
                            mainAxisSpacing: 15.0,
                            crossAxisSpacing: 15.0,
                            childAspectRatio: 1),
                        itemBuilder: (BuildContext context, int i) {
                          Item it = tmpList[i];
                          return IconTitle(item: it);
                        })
                    : const Center(
                        child: Text('Loading...'),
                      ))
          ],
        ),
      ),
    );
  }
}

class IconTitle extends StatefulWidget {
  final Item item;

  const IconTitle({super.key, required this.item});

  @override
  State<IconTitle> createState() {
    return _IconTitleState();
  }
}

class _IconTitleState extends State<IconTitle> {
  bool isHover = false;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      borderRadius: const BorderRadius.all(Radius.circular(10)),
      elevation: isHover ? 10 : 0,
      child: InkWell(
        onTap: () {
          Clipboard.setData(ClipboardData(text: widget.item.name));
          showToast("COPY DONE!",
              position: ToastPosition.bottom,
              backgroundColor: Colors.black,
              textAlign: TextAlign.center,
              textStyle: const TextStyle(color: Colors.white, fontSize: 40));
        },
        onHover: ((value) {
          setState(() {
            isHover = value;
          });
        }),
        child: Container(
          margin: const EdgeInsets.all(20),
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Icon(
                    IconData(int.parse(widget.item.code),
                        fontFamily: 'MaterialIcons'),
                    size: 50),
                Text(
                  overflow: TextOverflow.ellipsis,
                  widget.item.name,
                  textAlign: TextAlign.center,
                )
              ]),
        ),
      ),
    );
  }
}
