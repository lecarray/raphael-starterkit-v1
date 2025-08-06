import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createCheckoutSession } from "@/app/actions";

export async function POST(request: Request) {
  try {
    // 获取用户信息
    const supabase = await createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 解析请求体
    const body = await request.json();
    const { productType, quantity, userId } = body;

    // 验证参数
    if (!productType || !userId) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // 从配置中获取产品ID
    // 对于中文名字积分，使用我们配置的产品ID
    const productId = "prod_3sXyswTZQqqkawALyUD7gk";
    
    // 创建结账会话
    const checkoutUrl = await createCheckoutSession(
      productId,
      user.email!,
      userId,
      "credits", // 积分类型
      quantity // 1000积分
    );

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}