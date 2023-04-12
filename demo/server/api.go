package main

import "encoding/json"

type Req struct {
	Cmd  string `json:"cmd"`
	Data string `json:"data"`
}

type Rsp struct {
	Code   int8   `json:"code"`
	Data   string `json:"data"`
	ErrMsg string `json:"errmsg"`
}

func FormatSuccRsp(data string) ([]byte, error) {
	rsp := &Rsp{
		Code: 0,
		Data: data,
	}
	return json.Marshal(rsp)
}

func FormatErrorRsp(err error) ([]byte, error) {
	rsp := &Rsp{
		Code:   -1,
		ErrMsg: err.Error(),
	}
	return json.Marshal(rsp)
}
