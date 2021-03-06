"use strict";

define("Release");

description("Releases can communicate the delivery of functionality to an environment, staging, production, whatever.");

attributes("title", "status", "release_date", "version", "sha", "environment");

action("publish", function (params) {
  var release = this;
  release.setStatus("published");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcmVsZWFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs7QUFFakIsV0FBVyxDQUFDLDBHQUEwRyxDQUFDLENBQUE7O0FBRXZILFVBQVUsQ0FDUixPQUFPLEVBQ1AsUUFBUSxFQUNSLGNBQWMsRUFDZCxTQUFTLEVBQ1QsS0FBSyxFQUNMLGFBQWEsQ0FDZCxDQUFBOztBQUVELE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBUyxNQUFNLEVBQUM7QUFDaEMsTUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ25CLFNBQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7Q0FDL0IsQ0FBQyxDQUFBIiwiZmlsZSI6InJlbGVhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWZpbmUoXCJSZWxlYXNlXCIpXG5cbmRlc2NyaXB0aW9uKFwiUmVsZWFzZXMgY2FuIGNvbW11bmljYXRlIHRoZSBkZWxpdmVyeSBvZiBmdW5jdGlvbmFsaXR5IHRvIGFuIGVudmlyb25tZW50LCBzdGFnaW5nLCBwcm9kdWN0aW9uLCB3aGF0ZXZlci5cIilcblxuYXR0cmlidXRlcyhcbiAgXCJ0aXRsZVwiLFxuICBcInN0YXR1c1wiLFxuICBcInJlbGVhc2VfZGF0ZVwiLFxuICBcInZlcnNpb25cIixcbiAgXCJzaGFcIixcbiAgXCJlbnZpcm9ubWVudFwiXG4pXG5cbmFjdGlvbihcInB1Ymxpc2hcIiwgZnVuY3Rpb24ocGFyYW1zKXtcbiAgdmFyIHJlbGVhc2UgPSB0aGlzO1xuICByZWxlYXNlLnNldFN0YXR1cyhcInB1Ymxpc2hlZFwiKVxufSlcbiJdfQ==