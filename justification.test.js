const justification = require('./justification')

test('should justify as expected', () => {
    expect(justification.justify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus massa, blandit ut mi quis, vulputate pretium lectus. Ut eu neque gravida eros fermentum hendrerit non eu libero. Suspendisse commodo placerat ex. Integer risus eros, imperdiet ut lacinia eu, iaculis quis nibh. Pellentesque sit amet tempor lacus. Cras ornare lorem et risus lacinia venenatis. Mauris ullamcorper lectus at condimentum ultrices. Sed ac fringilla tortor. Proin nec finibus leo. Sed feugiat, neque id facilisis dictum, quam urna facilisis metus, in sollicitudin nisi eros nec justo. Donec ullamcorper enim in laoreet dictum. Suspendisse quis turpis in mauris tempus congue vel eu sem. Curabitur id lacinia odio, ut pulvinar lorem. Duis ex orci, sagittis vel odio vel, blandit tristique nulla.", 30))
        .toStrictEqual([
            "Lorem  ipsum  dolor  sit amet,",
            "consectetur  adipiscing  elit.",
            "In  metus massa, blandit ut mi",
            "quis,     vulputate    pretium",
            "lectus.  Ut  eu  neque gravida",
            "eros  fermentum  hendrerit non",
            "eu libero. Suspendisse commodo",
            "placerat   ex.  Integer  risus",
            "eros, imperdiet ut lacinia eu,",
            "iaculis       quis       nibh.",
            "Pellentesque  sit  amet tempor",
            "lacus.  Cras  ornare  lorem et",
            "risus    lacinia    venenatis.",
            "Mauris  ullamcorper  lectus at",
            "condimentum  ultrices.  Sed ac",
            "fringilla  tortor.  Proin  nec",
            "finibus   leo.   Sed  feugiat,",
            "neque   id  facilisis  dictum,",
            "quam  urna facilisis metus, in",
            "sollicitudin   nisi  eros  nec",
            "justo.  Donec ullamcorper enim",
            "in laoreet dictum. Suspendisse",
            "quis  turpis  in mauris tempus",
            "congue  vel  eu sem. Curabitur",
            "id  lacinia  odio, ut pulvinar",
            "lorem.  Duis ex orci, sagittis",
            "vel    odio    vel,    blandit",
            "tristique               nulla."
        ])

    expect(justification.justify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus massa, blandit ut mi quis, vulputate pretium lectus. Ut eu neque gravida eros fermentum hendrerit non eu libero. Suspendisse commodo placerat ex. Integer risus eros, imperdiet ut lacinia eu, iaculis quis nibh. Pellentesque sit amet tempor lacus. Cras ornare lorem et risus lacinia venenatis. Mauris ullamcorper lectus at condimentum ultrices. Sed ac fringilla tortor. Proin nec finibus leo. Sed feugiat, neque id facilisis dictum, quam urna facilisis metus, in sollicitudin nisi eros nec justo. Donec ullamcorper enim in laoreet dictum. Suspendisse quis turpis in mauris tempus congue vel eu sem. Curabitur id lacinia odio, ut pulvinar lorem. Duis ex orci, sagittis vel odio vel, blandit tristique nulla.", 50))
        .toStrictEqual([
            "Lorem ipsum dolor sit amet, consectetur adipiscing",
            "elit.   In   metus  massa,  blandit  ut  mi  quis,",
            "vulputate pretium lectus. Ut eu neque gravida eros",
            "fermentum  hendrerit  non  eu  libero. Suspendisse",
            "commodo placerat ex. Integer risus eros, imperdiet",
            "ut lacinia eu, iaculis quis nibh. Pellentesque sit",
            "amet  tempor  lacus.  Cras  ornare  lorem et risus",
            "lacinia  venenatis.  Mauris  ullamcorper lectus at",
            "condimentum  ultrices.  Sed  ac  fringilla tortor.",
            "Proin  nec  finibus  leo.  Sed  feugiat,  neque id",
            "facilisis  dictum,  quam  urna facilisis metus, in",
            "sollicitudin    nisi   eros   nec   justo.   Donec",
            "ullamcorper  enim  in  laoreet dictum. Suspendisse",
            "quis  turpis  in  mauris tempus congue vel eu sem.",
            "Curabitur id lacinia odio, ut pulvinar lorem. Duis",
            "ex  orci, sagittis vel odio vel, blandit tristique",
            "nulla.                                            ",
        ])

    expect(justification.justify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus massa, blandit ut mi quis, vulputate pretium lectus. Ut eu neque gravida eros fermentum hendrerit non eu libero. Suspendisse commodo placerat ex. Integer risus eros, imperdiet ut lacinia eu, iaculis quis nibh. Pellentesque sit amet tempor lacus. Cras ornare lorem et risus lacinia venenatis. Mauris ullamcorper lectus at condimentum ultrices. Sed ac fringilla tortor. Proin nec finibus leo. Sed feugiat, neque id facilisis dictum, quam urna facilisis metus, in sollicitudin nisi eros nec justo. Donec ullamcorper enim in laoreet dictum. Suspendisse quis turpis in mauris tempus congue vel eu sem. Curabitur id lacinia odio, ut pulvinar lorem. Duis ex orci, sagittis vel odio vel, blandit tristique nulla.", 21))
        .toStrictEqual([
            "Lorem ipsum dolor sit",
            "amet,     consectetur",
            "adipiscing  elit.  In",
            "metus  massa, blandit",
            "ut mi quis, vulputate",
            "pretium lectus. Ut eu",
            "neque   gravida  eros",
            "fermentum   hendrerit",
            "non     eu    libero.",
            "Suspendisse   commodo",
            "placerat  ex. Integer",
            "risus eros, imperdiet",
            "ut     lacinia    eu,",
            "iaculis   quis  nibh.",
            "Pellentesque sit amet",
            "tempor   lacus.  Cras",
            "ornare lorem et risus",
            "lacinia    venenatis.",
            "Mauris    ullamcorper",
            "lectus at condimentum",
            "ultrices.    Sed   ac",
            "fringilla     tortor.",
            "Proin   nec   finibus",
            "leo.   Sed   feugiat,",
            "neque   id  facilisis",
            "dictum,   quam   urna",
            "facilisis  metus,  in",
            "sollicitudin     nisi",
            "eros nec justo. Donec",
            "ullamcorper  enim  in",
            "laoreet       dictum.",
            "Suspendisse      quis",
            "turpis    in   mauris",
            "tempus  congue vel eu",
            "sem.   Curabitur   id",
            "lacinia    odio,   ut",
            "pulvinar  lorem. Duis",
            "ex orci, sagittis vel",
            "odio   vel,   blandit",
            "tristique      nulla.",
        ])

    expect(justification.justify("abc 123 xyz qwe rty", 14))
        .toStrictEqual([
            "abc   123  xyz",
            "qwe        rty"
        ])

    expect(justification.justify("boat cat giraffe lion elephant", 10))
        .toStrictEqual([
            "boat   cat",
            "giraffe   ",
            "lion      ",
            "elephant  "
        ])

    expect(justification.justify("cat giraffe boat lion elephant", 12))
        .toStrictEqual([
            "cat  giraffe",
            "boat    lion",
            "elephant    "])

    expect(justification.justify("boat cat chair arm car tv remote computer", 17))
        .toStrictEqual([
            "boat   cat  chair",
            "arm car tv remote",
            "computer         "
        ])

    expect(justification.justify("boat cat chair arm car tv remote computer", 11))
        .toStrictEqual([
            "boat    cat",
            "chair   arm",
            "car      tv",
            "remote     ",
            "computer   "
        ])

    expect(justification.justify("boat cat chair arm car tv remote computer", 24))
        .toStrictEqual([
            "boat  cat  chair arm car",
            "tv    remote    computer"
        ])

    expect(justification.justify("boat cat chair arm car tv remote computer", 27))
        .toStrictEqual([
            "boat  cat  chair arm car tv",
            "remote             computer"
        ])
});