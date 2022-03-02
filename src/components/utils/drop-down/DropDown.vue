<template>
  <div
    class="dropdown"
    @click="toggleRiskLevels"
    :style="[
      { '--options-height': optionsHeight + 'px' },
      { '--option-height': optionHeight + 'px' },
      { '--main-el-border-radius': borderRadius },
      { '--dropdown-width': width + 'px' },
      { '--dropdown-background-color': backgroundColor },
      { '--dropdown-border': border },
      { '--dropdown-hover-background-color': hoverBackgroundColor },
      { '--dropdown-default-text-color': textColor }
    ]"
  >
    <span class="text"
      >{{ (config.prefix ? config.prefix : "") + " "
      }}{{ config.placeholder ? config.placeholder : "" }}</span
    >
    <i class="angle-down"></i>
    <div v-if="isBottomSectionToggled" class="options">
      <div
        v-for="(option, i) in configOptions" :key="i"
        class="option"
        v-html="option.value"
        @click="setCurrentSelectedOption(option);"
      >
        {{  }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dropdown",
  data() {
    return {
      isBottomSectionToggled: false,
      optionsHeight: 0,
      optionHeight: 35,
      width: 100,
      configOptions: [],
      backgroundColor: "gray",
      hoverBackgroundColor: "transparent",
      border: "1px solid  #232b35",
      borderRadius: 0,
      textColor: "#fff"
    };
  },
  components: {},
  props: ["config"],
  computed: {},
  methods: {
    toggleRiskLevels() {
      this.isBottomSectionToggled = !this.isBottomSectionToggled;
    },
    setCurrentSelectedOption(option) {
      this.$emit("setSelectedOption", option);
    },
    setConfigData() {
      this.configOptions = this.config.options;
      this.width = this.config.width;
      this.placeholder = this.config.placeholder;
      if (this.config.backgroundColor) {
        this.backgroundColor = this.config.backgroundColor;
      }
      if (this.config.border) {
        this.border = this.config.border;
      }
      if (this.config.hoverBackgroundColor) {
        this.hoverBackgroundColor = this.config.hoverBackgroundColor;
      }
      if (this.config.textColor) {
        this.textColor = this.config.textColor;
      }
      if (this.config.borderRadius) {
        this.borderRadius = this.config.borderRadius;
      }
    },
    setOptionsHeight() {
      this.optionsHeight = this.optionHeight * this.configOptions.length;
    }
  },
  created() {
    this.setConfigData();
    this.setOptionsHeight();
  },
  beforeUdate() {
    // this.setOptionsHeight();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "./drop-down.scss";
</style>
