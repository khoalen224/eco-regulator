"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const STORAGE_PREFIX = "eco-regulator:read:";

function loadReadSet(sectionId: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_PREFIX + sectionId);
    if (!raw) return new Set();
    const arr = JSON.parse(raw) as string[];
    return new Set(arr);
  } catch {
    return new Set();
  }
}

function saveReadSet(sectionId: string, set: Set<string>) {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + sectionId, JSON.stringify(Array.from(set)));
  } catch {
    // localStorage có thể bị chặn (chế độ ẩn danh...) — im lặng bỏ qua, không chặn UI
  }
}

/**
 * Theo dõi tiến độ đọc lý thuyết theo từng mục (VD: "5.1", "5.2", "5.3").
 * blockIds = danh sách id của các khối nội dung con trong mục đó
 */
export function useReadProgress(sectionId: string, blockIds: string[]) {
  const [readSet, setReadSet] = useState<Set<string>>(() => loadReadSet(sectionId));

  useEffect(() => {
    setReadSet(loadReadSet(sectionId));
  }, [sectionId]);

  const markRead = useCallback(
    (blockId: string) => {
      setReadSet((prev) => {
        if (prev.has(blockId)) return prev; // đã đánh dấu rồi
        const next = new Set(prev);
        next.add(blockId);
        saveReadSet(sectionId, next);
        return next;
      });
    },
    [sectionId]
  );

  const isRead = useCallback((blockId: string) => readSet.has(blockId), [readSet]);

  const progress = useMemo(() => {
    const total = blockIds.length;
    const read = blockIds.filter((id) => readSet.has(id)).length;
    return { read, total, percent: total === 0 ? 0 : Math.round((read / total) * 100) };
  }, [readSet, blockIds]);

  return { readSet, markRead, isRead, progress };
}
