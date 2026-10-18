/// <reference path="../../index.d.ts" />

/**
 * ### 📱 设备信息对象
 *
 * 在LLSE中，使用「设备信息对象」来操作和获取某一个玩家使用的游戏设备的相关信息。
 *
 * 该类**没有构造函数**，请使用{@linkcode Player.getDevice()}创建
 *
 * **注意**：不要**长期保存**一个设备信息对象\
 * 当设备对应的玩家退出游戏时，对应的对象将变得无效。\
 * 因此，如果有长期操作某个对象的需要，请通过上述途径获取实时的设备信息对象
 *
 * @see [📱 设备信息对象 API](https://docs.levimc.org/LegacyScriptEngine/zh/apis/GameAPI/Device/)
 */
declare class Device {
  /** 玩家设备的IP地址 */
  readonly ip: string

  /** 玩家的平均网络延迟时间（ms） */
  readonly avgPing: number

  /** 玩家的平均网络丢包率（%） */
  readonly avgPacketLoss: number

  /** 玩家的网络延迟时间（ms） */
  readonly lastPing: number

  /** 玩家的网络丢包率（%） */
  readonly lastPacketLoss: number

  /**
   * ### 玩家设备的操作系统类型
   *
   * 返回一个字符串，记录了玩家设备的操作系统。可能返回的值如下表
   *
   * | dv.os返回字符串 | 玩家设备的操作系统    |
   * | --------------- | --------------------- |
   * | `Android`       | 手机谷歌Android       |
   * | `iOS`           | 手机苹果iOS/平板iPadOS           |
   * | `OSX`           | 电脑苹果macOS           |
   * | `Amazon`        | 平板/电视亚马逊FireOS                |
   * | `GearVR`        | 头显三星GearVR                |
   * | `Hololens`      | 头显微软HoloLens              |
   * | `Windows10`     | 电脑微软Windows         |
   * | `Win32`         | 电脑微软Win32（教育版？） |
   * | `TVOS`          | 机顶盒苹果tvOS                  |
   * | `PlayStation`   | 主机索尼PlayStation       |
   * | `Nintendo`      | 掌机任天堂Switch          |
   * | `Xbox`          | 主机微软Xbox              |
   * | `WindowsPhone`  | 手机微软Windows Mobile     |
   * | `Unknown`       | 未知系统              |
   */
  readonly os:
    | `Android`
    | `iOS`
    | `OSX`
    | `Amazon`
    | `GearVR`
    | `Hololens`
    | `Windows10`
    | `Win32`
    | `TVOS`
    | `PlayStation`
    | `Nintendo`
    | `Xbox`
    | `WindowsPhone`
    | `Unknown`

  /** 玩家连接的地址 */
  readonly serverAddress: string

  /** 玩家客户端的识别码ID */
  readonly clientId: string

  /** 输入模式 */
  readonly inputMode: number

  /** 玩家的游玩模式 */
  readonly playMode: number
}

declare class LLSE_Device extends Device {}
