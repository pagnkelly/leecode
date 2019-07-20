function gql( /* arguments */ ) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];
  console.log('literals', literals);
  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof (literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }
   
    result += literals[i];
    console.log('literals', args[i], result);
  }

  console.log(result);
}


gql`
    query ${1 + 2}($hotelSeq:String) {
      ${'wwwww'}(hotelSeq: $hotelSeq) {
        sumCommission
        sumBonus
        orderList {
          id
          phoneNumber
          hotelName
          hotelSeq
          orderNo
          orderDate
          userStatus
          commission
          bonus
        }
      }
    }
  `